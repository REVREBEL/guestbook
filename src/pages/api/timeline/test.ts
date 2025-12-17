/**
 * Test endpoint to simulate timeline form submission
 * Can be run via GET to simulate a POST with form data
 */

import type { APIRoute } from 'astro';
import { WebflowClient } from 'webflow-api';
import { parseDateOrDefault } from '../../../lib/date-parser';

export const GET: APIRoute = async ({ request, locals, url }) => {
  const mode = url.searchParams.get('mode') || 'info';
  
  if (mode === 'info') {
    const hasWriteToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                             import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE);
    const hasReadToken = !!(locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                            import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN);
    const hasCollectionId = !!(locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                               import.meta.env.TIMELINE_COLLECTION_ID);
    const hasR2 = !!(locals?.runtime?.env?.R2_ACCESS_KEY_ID || import.meta.env.R2_ACCESS_KEY_ID);
    
    return new Response(JSON.stringify({
      message: 'Timeline Test API',
      timestamp: new Date().toISOString(),
      config: {
        hasWriteToken,
        hasReadToken,
        hasCollectionId,
        hasR2,
        collectionId: locals?.runtime?.env?.TIMELINE_COLLECTION_ID || import.meta.env.TIMELINE_COLLECTION_ID
      },
      modes: {
        info: 'GET ?mode=info (current)',
        create: 'GET ?mode=create (create test item)',
        query: 'GET ?mode=query (query max timeline_id)'
      }
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  if (mode === 'query') {
    try {
      const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                   import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE ||
                   locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                   import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
      
      const baseApiUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || 
                        import.meta.env.WEBFLOW_API_HOST;
      
      const client = new WebflowClient({
        accessToken: token,
        ...(baseApiUrl && { baseUrl: baseApiUrl })
      });
      
      const collectionId = locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                          import.meta.env.TIMELINE_COLLECTION_ID;
      
      console.log('🔍 Querying all items to find max timeline_id...');
      
      let allItems: any[] = [];
      let offset = 0;
      const limit = 100;
      
      while (true) {
        const batch = await client.collections.items.listItems(collectionId, {
          limit,
          offset
        });
        
        if (batch.items && batch.items.length > 0) {
          allItems = allItems.concat(batch.items);
          console.log(`   Fetched ${batch.items.length} items (offset ${offset})`);
          
          if (batch.items.length < limit) break;
          offset += limit;
        } else {
          break;
        }
      }
      
      const maxId = allItems.reduce((max, item) => {
        const itemId = item.fieldData['event-number'] as number || 0;
        return Math.max(max, itemId);
      }, 0);
      
      const nextId = maxId + 1;
      const isEven = nextId % 2 === 0;
      
      return new Response(JSON.stringify({
        success: true,
        totalItems: allItems.length,
        currentMaxTimelineId: maxId,
        nextTimelineId: nextId,
        nextIsEven: isEven,
        items: allItems.map(item => ({
          id: item.id,
          name: item.fieldData.name,
          eventNumber: item.fieldData['event-number'],
          isDraft: item.isDraft
        }))
      }, null, 2), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error: any) {
      return new Response(JSON.stringify({
        success: false,
        error: error.message,
        stack: error.stack
      }, null, 2), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  if (mode === 'create') {
    try {
      const token = locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN_WRITE || 
                   import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN_WRITE ||
                   locals?.runtime?.env?.WEBFLOW_CMS_SITE_API_TOKEN || 
                   import.meta.env.WEBFLOW_CMS_SITE_API_TOKEN;
      
      const baseApiUrl = locals?.runtime?.env?.WEBFLOW_API_HOST || 
                        import.meta.env.WEBFLOW_API_HOST;
      
      const client = new WebflowClient({
        accessToken: token,
        ...(baseApiUrl && { baseUrl: baseApiUrl })
      });
      
      const collectionId = locals?.runtime?.env?.TIMELINE_COLLECTION_ID ||
                          import.meta.env.TIMELINE_COLLECTION_ID;
      
      // Get max timeline_id
      console.log('🔍 Querying for max timeline_id...');
      let allItems: any[] = [];
      let offset = 0;
      const limit = 100;
      
      while (true) {
        const batch = await client.collections.items.listItems(collectionId, {
          limit,
          offset
        });
        
        if (batch.items && batch.items.length > 0) {
          allItems = allItems.concat(batch.items);
          if (batch.items.length < limit) break;
          offset += limit;
        } else {
          break;
        }
      }
      
      const maxId = allItems.reduce((max, item) => {
        const itemId = item.fieldData['event-number'] as number || 0;
        return Math.max(max, itemId);
      }, 0);
      
      const nextEventNumber = maxId + 1;
      const isEven = nextEventNumber % 2 === 0;
      
      console.log(`📊 Found ${allItems.length} items, max ID: ${maxId}, next: ${nextEventNumber}`);
      
      // Create test item
      const timelineName = `API Test Event ${nextEventNumber}`;
      const slug = `api-test-${nextEventNumber}-${Date.now()}`;
      const editCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const timelineDate = parseDateOrDefault('December 2024');
      
      const fieldData = {
        'name': timelineName,
        'slug': slug,
        'event-number': nextEventNumber,
        'even-number': isEven,
        'date': new Date().toISOString(),
        'date-added': timelineDate,
        'event-name': timelineName,
        'event-name-main': timelineName,
        'description': 'Test submission via API endpoint',
        'event-type': '',
        'timeline-location': 'API Test Location',
        'full-name': 'API Tester',
        'email': 'api@test.com',
        'posted-by-user-name': 'API Tester',
        'origin': 'webflow',
        'edit-code': editCode,
        'permalink': '',
        'synced': false,
        'approved': true,
        'active': true,
        '_archived': false,
        '_draft': false,
      };
      
      console.log('🚀 Creating item...');
      const response = await client.collections.items.createItem(
        collectionId,
        { fieldData }
      );
      
      console.log('✅ Item created:', response.id);
      
      // Publish it
      if (response.id) {
        console.log('📢 Publishing...');
        await client.collections.items.publishItem(collectionId, response.id);
        console.log('✅ Published');
      }
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Test item created and published',
        item: {
          id: response.id,
          name: timelineName,
          slug: slug,
          eventNumber: nextEventNumber,
          isEven: isEven,
          editCode: editCode,
          approved: true,
          active: true,
          origin: 'webflow'
        }
      }, null, 2), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error: any) {
      console.error('❌ Error:', error);
      return new Response(JSON.stringify({
        success: false,
        error: error.message,
        stack: error.stack
      }, null, 2), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  return new Response('Invalid mode', { status: 400 });
};
