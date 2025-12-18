# List Assets

GET https://api.webflow.com/v2/sites/{site_id}/assets

List of assets uploaded to a site

Required scope | `assets:read`


Reference: https://developers.webflow.com/data/reference/assets/assets/list

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: List Assets
  version: endpoint_assets.list
paths:
  /sites/{site_id}/assets:
    get:
      operationId: list
      summary: List Assets
      description: |
        List of assets uploaded to a site

        Required scope | `assets:read`
      tags:
        - - subpackage_assets
      parameters:
        - name: site_id
          in: path
          description: Unique identifier for a Site
          required: true
          schema:
            type: string
            format: objectid
        - name: offset
          in: query
          description: >-
            Offset used for pagination if the results have more than limit
            records
          required: false
          schema:
            type: number
            format: double
        - name: limit
          in: query
          description: 'Maximum number of records to be returned (max limit: 100)'
          required: false
          schema:
            type: number
            format: double
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/assets_list_Response_200'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
components:
  schemas:
    SitesSiteIdAssetsGetResponsesContentApplicationJsonSchemaAssetsItemsVariantsItems:
      type: object
      properties:
        hostedUrl:
          type: string
          format: uri
          description: URL of where the asset variant is hosted
        originalFileName:
          type: string
          description: Original file name of the variant
        displayName:
          type: string
          description: Display name of the variant
        format:
          type: string
          description: format of the variant
        width:
          type: integer
          description: Width in pixels
        height:
          type:
            - integer
            - 'null'
          description: Height in pixels
        quality:
          type: integer
          description: Value between 0 and 100 representing the image quality
        error:
          type:
            - string
            - 'null'
          description: Any associated validation errors
      required:
        - hostedUrl
        - originalFileName
        - displayName
        - format
        - width
        - height
        - quality
    SitesSiteIdAssetsGetResponsesContentApplicationJsonSchemaAssetsItems:
      type: object
      properties:
        id:
          type: string
          format: objectid
          description: Unique identifier for this asset
        contentType:
          type: string
          format: mime-type
          description: File format type
        size:
          type: integer
          description: size in bytes
        siteId:
          type: string
          format: objectid
          description: Unique identifier for the site that hosts this asset
        hostedUrl:
          type: string
          format: uri
          description: Link to the asset
        originalFileName:
          type: string
          description: Original file name at the time of upload
        displayName:
          type: string
          description: Display name of the asset
        lastUpdated:
          type: string
          format: date-time
          description: Date the asset metadata was last updated
        createdOn:
          type: string
          format: date-time
          description: Date the asset metadata was created
        variants:
          type: array
          items:
            $ref: >-
              #/components/schemas/SitesSiteIdAssetsGetResponsesContentApplicationJsonSchemaAssetsItemsVariantsItems
          description: >-
            A list of [asset
            variants](https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images)
            created by Webflow to serve your site responsively.
        altText:
          type:
            - string
            - 'null'
          description: The visual description of the asset
      required:
        - id
        - contentType
        - size
        - siteId
        - hostedUrl
        - originalFileName
        - displayName
        - lastUpdated
        - createdOn
        - variants
        - altText
    SitesSiteIdAssetsGetResponsesContentApplicationJsonSchemaPagination:
      type: object
      properties:
        limit:
          type: number
          format: double
          description: The limit used for pagination
        offset:
          type: number
          format: double
          description: The offset used for pagination
        total:
          type: number
          format: double
          description: The total number of records
      required:
        - limit
        - offset
        - total
    assets_list_Response_200:
      type: object
      properties:
        assets:
          type: array
          items:
            $ref: >-
              #/components/schemas/SitesSiteIdAssetsGetResponsesContentApplicationJsonSchemaAssetsItems
        pagination:
          $ref: >-
            #/components/schemas/SitesSiteIdAssetsGetResponsesContentApplicationJsonSchemaPagination
          description: Pagination object
      required:
        - assets
        - pagination

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.assets.list(
    site_id="580e63e98c9a982ac9b8b741",
    offset=1.1,
    limit=1.1,
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.assets.list("580e63e98c9a982ac9b8b741", {
    offset: 1.1,
    limit: 1.1
});

```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.get("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```


# Get Asset

GET https://api.webflow.com/v2/assets/{asset_id}

Get details about an asset

Required scope | `assets:read`


Reference: https://developers.webflow.com/data/reference/assets/assets/get

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Get Asset
  version: endpoint_assets.get
paths:
  /assets/{asset_id}:
    get:
      operationId: get
      summary: Get Asset
      description: |
        Get details about an asset

        Required scope | `assets:read`
      tags:
        - - subpackage_assets
      parameters:
        - name: asset_id
          in: path
          description: Unique identifier for an Asset on a site
          required: true
          schema:
            type: string
            format: objectid
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/assets_get_Response_200'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
components:
  schemas:
    AssetsAssetIdGetResponsesContentApplicationJsonSchemaVariantsItems:
      type: object
      properties:
        hostedUrl:
          type: string
          format: uri
          description: URL of where the asset variant is hosted
        originalFileName:
          type: string
          description: Original file name of the variant
        displayName:
          type: string
          description: Display name of the variant
        format:
          type: string
          description: format of the variant
        width:
          type: integer
          description: Width in pixels
        height:
          type:
            - integer
            - 'null'
          description: Height in pixels
        quality:
          type: integer
          description: Value between 0 and 100 representing the image quality
        error:
          type:
            - string
            - 'null'
          description: Any associated validation errors
      required:
        - hostedUrl
        - originalFileName
        - displayName
        - format
        - width
        - height
        - quality
    assets_get_Response_200:
      type: object
      properties:
        id:
          type: string
          format: objectid
          description: Unique identifier for this asset
        contentType:
          type: string
          format: mime-type
          description: File format type
        size:
          type: integer
          description: size in bytes
        siteId:
          type: string
          format: objectid
          description: Unique identifier for the site that hosts this asset
        hostedUrl:
          type: string
          format: uri
          description: Link to the asset
        originalFileName:
          type: string
          description: Original file name at the time of upload
        displayName:
          type: string
          description: Display name of the asset
        lastUpdated:
          type: string
          format: date-time
          description: Date the asset metadata was last updated
        createdOn:
          type: string
          format: date-time
          description: Date the asset metadata was created
        variants:
          type: array
          items:
            $ref: >-
              #/components/schemas/AssetsAssetIdGetResponsesContentApplicationJsonSchemaVariantsItems
          description: >-
            A list of [asset
            variants](https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images)
            created by Webflow to serve your site responsively.
        altText:
          type:
            - string
            - 'null'
          description: The visual description of the asset
      required:
        - id
        - contentType
        - size
        - siteId
        - hostedUrl
        - originalFileName
        - displayName
        - lastUpdated
        - createdOn
        - variants
        - altText

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.assets.get(
    asset_id="580e63fc8c9a982ac9b8b745",
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.assets.get("580e63fc8c9a982ac9b8b745");

```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.get("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```




# Upload Asset

POST https://api.webflow.com/v2/sites/{site_id}/assets
Content-Type: application/json

The first step in uploading an asset to a site. 


This endpoint generates a response with the following information: `uploadUrl` and `uploadDetails`.


Use these properties in the header of a [POST request to Amazson s3](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html) to complete the upload.


To learn more about how to upload assets to Webflow, see our [assets guide](/data/docs/working-with-assets).
  
 Required scope | `assets:write`


Reference: https://developers.webflow.com/data/reference/assets/assets/create

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Upload Asset
  version: endpoint_assets.create
paths:
  /sites/{site_id}/assets:
    post:
      operationId: create
      summary: Upload Asset
      description: >
        The first step in uploading an asset to a site. 



        This endpoint generates a response with the following information:
        `uploadUrl` and `uploadDetails`.



        Use these properties in the header of a [POST request to Amazson
        s3](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html)
        to complete the upload.



        To learn more about how to upload assets to Webflow, see our [assets
        guide](/data/docs/working-with-assets).
          
         Required scope | `assets:write`
      tags:
        - - subpackage_assets
      parameters:
        - name: site_id
          in: path
          description: Unique identifier for a Site
          required: true
          schema:
            type: string
            format: objectid
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/assets_create_Response_200'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
      requestBody:
        description: Information about the asset to create
        content:
          application/json:
            schema:
              type: object
              properties:
                fileName:
                  type: string
                  description: >-
                    File name including file extension. File names must be less
                    than 100 characters.
                fileHash:
                  type: string
                  description: MD5 hash of the file
                parentFolder:
                  type: string
                  description: ID of the Asset folder (optional)
              required:
                - fileName
                - fileHash
components:
  schemas:
    SitesSiteIdAssetsPostResponsesContentApplicationJsonSchemaUploadDetails:
      type: object
      properties:
        acl:
          type: string
        bucket:
          type: string
        X-Amz-Algorithm:
          type: string
        X-Amz-Credential:
          type: string
        X-Amz-Date:
          type: string
        key:
          type: string
        Policy:
          type: string
        X-Amz-Signature:
          type: string
        success_action_status:
          type: string
        content-type:
          type: string
          format: mime-type
        Cache-Control:
          type: string
    assets_create_Response_200:
      type: object
      properties:
        uploadDetails:
          $ref: >-
            #/components/schemas/SitesSiteIdAssetsPostResponsesContentApplicationJsonSchemaUploadDetails
          description: Metadata for uploading the asset binary
        contentType:
          type: string
        id:
          type: string
          format: objectid
        parentFolder:
          type: string
          format: objectid
          description: Parent folder for the asset
        uploadUrl:
          type: string
          format: uri
        assetUrl:
          type: string
          format: uri
          description: S3 link to the asset
        hostedUrl:
          type: string
          format: uri
          description: Represents the link to the asset
        originalFileName:
          type: string
          description: >-
            Original file name when uploaded. If not specified at time of
            upload, it may be extracted from the raw file name
        createdOn:
          type: string
          format: date-time
          description: Date the asset metadata was created
        lastUpdated:
          type: string
          format: date-time
          description: Date the asset metadata was last updated

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.assets.create(
    site_id="580e63e98c9a982ac9b8b741",
    file_name="file.png",
    file_hash="3c7d87c9575702bc3b1e991f4d3c638e",
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.assets.create("580e63e98c9a982ac9b8b741", {
    fileName: "file.png",
    fileHash: "3c7d87c9575702bc3b1e991f4d3c638e"
});

```

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets"

	payload := strings.NewReader("{\n  \"fileName\": \"file.png\",\n  \"fileHash\": \"3c7d87c9575702bc3b1e991f4d3c638e\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"fileName\": \"file.png\",\n  \"fileHash\": \"3c7d87c9575702bc3b1e991f4d3c638e\"\n}"

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.post("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"fileName\": \"file.png\",\n  \"fileHash\": \"3c7d87c9575702bc3b1e991f4d3c638e\"\n}")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets', [
  'body' => '{
  "fileName": "file.png",
  "fileHash": "3c7d87c9575702bc3b1e991f4d3c638e"
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"fileName\": \"file.png\",\n  \"fileHash\": \"3c7d87c9575702bc3b1e991f4d3c638e\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "fileName": "file.png",
  "fileHash": "3c7d87c9575702bc3b1e991f4d3c638e"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```




# Update Asset

PATCH https://api.webflow.com/v2/assets/{asset_id}
Content-Type: application/json

Update details of an Asset.

Required scope | `assets:write`


Reference: https://developers.webflow.com/data/reference/assets/assets/update

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Update Asset
  version: endpoint_assets.update
paths:
  /assets/{asset_id}:
    patch:
      operationId: update
      summary: Update Asset
      description: |
        Update details of an Asset.

        Required scope | `assets:write`
      tags:
        - - subpackage_assets
      parameters:
        - name: asset_id
          in: path
          description: Unique identifier for an Asset on a site
          required: true
          schema:
            type: string
            format: objectid
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/assets_update_Response_200'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
      requestBody:
        description: Information about the asset to update
        content:
          application/json:
            schema:
              type: object
              properties:
                localeId:
                  type: string
                  description: >-
                    Unique identifier for a specific locale. Applicable, when
                    using localization.
                displayName:
                  type: string
                  description: A human readable name for the asset
components:
  schemas:
    AssetsAssetIdPatchResponsesContentApplicationJsonSchemaVariantsItems:
      type: object
      properties:
        hostedUrl:
          type: string
          format: uri
          description: URL of where the asset variant is hosted
        originalFileName:
          type: string
          description: Original file name of the variant
        displayName:
          type: string
          description: Display name of the variant
        format:
          type: string
          description: format of the variant
        width:
          type: integer
          description: Width in pixels
        height:
          type:
            - integer
            - 'null'
          description: Height in pixels
        quality:
          type: integer
          description: Value between 0 and 100 representing the image quality
        error:
          type:
            - string
            - 'null'
          description: Any associated validation errors
      required:
        - hostedUrl
        - originalFileName
        - displayName
        - format
        - width
        - height
        - quality
    assets_update_Response_200:
      type: object
      properties:
        id:
          type: string
          format: objectid
          description: Unique identifier for this asset
        contentType:
          type: string
          format: mime-type
          description: File format type
        size:
          type: integer
          description: size in bytes
        siteId:
          type: string
          format: objectid
          description: Unique identifier for the site that hosts this asset
        hostedUrl:
          type: string
          format: uri
          description: Link to the asset
        originalFileName:
          type: string
          description: Original file name at the time of upload
        displayName:
          type: string
          description: Display name of the asset
        lastUpdated:
          type: string
          format: date-time
          description: Date the asset metadata was last updated
        createdOn:
          type: string
          format: date-time
          description: Date the asset metadata was created
        variants:
          type: array
          items:
            $ref: >-
              #/components/schemas/AssetsAssetIdPatchResponsesContentApplicationJsonSchemaVariantsItems
          description: >-
            A list of [asset
            variants](https://help.webflow.com/hc/en-us/articles/33961378697107-Responsive-images)
            created by Webflow to serve your site responsively.
        altText:
          type:
            - string
            - 'null'
          description: The visual description of the asset
      required:
        - id
        - contentType
        - size
        - siteId
        - hostedUrl
        - originalFileName
        - displayName
        - lastUpdated
        - createdOn
        - variants
        - altText

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.assets.update(
    asset_id="580e63fc8c9a982ac9b8b745",
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.assets.update("580e63fc8c9a982ac9b8b745");

```

```go
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745"

	payload := strings.NewReader("{}")

	req, _ := http.NewRequest("PATCH", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{}"

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{}")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745', [
  'body' => '{}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```


# Delete Asset

DELETE https://api.webflow.com/v2/assets/{asset_id}

Delete an Asset

Required Scope: `assets: write`


Reference: https://developers.webflow.com/data/reference/assets/assets/delete

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Delete Asset
  version: endpoint_assets.delete
paths:
  /assets/{asset_id}:
    delete:
      operationId: delete
      summary: Delete Asset
      description: |
        Delete an Asset

        Required Scope: `assets: write`
      tags:
        - - subpackage_assets
      parameters:
        - name: asset_id
          in: path
          description: Unique identifier for an Asset on a site
          required: true
          schema:
            type: string
            format: objectid
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '204':
          description: Request was successful. No Content is returned.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/assets_delete_Response_204'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
components:
  schemas:
    assets_delete_Response_204:
      type: object
      properties: {}

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.assets.delete(
    asset_id="580e63fc8c9a982ac9b8b745",
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.assets.delete("580e63fc8c9a982ac9b8b745");

```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745"

	req, _ := http.NewRequest("DELETE", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Delete.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.delete("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('DELETE', 'https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745");
var request = new RestRequest(Method.DELETE);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "DELETE"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```





// List Assets (GET /sites/:site_id/assets)
const response = await fetch("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets?offset=0&limit=100", {
  method: "GET",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2"
  },
});
const body = await response.json();
console.log(body);


// Get Asset (GET /assets/:asset_id)
const response = await fetch("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745", {
  method: "GET",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2"
  },
});
const body = await response.json();
console.log(body);


// List Asset Folders (GET /sites/:site_id/asset_folders)
const response = await fetch("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/asset_folders", {
  method: "GET",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2"
  },
});
const body = await response.json();
console.log(body);


// Get Asset Folder (GET /asset_folders/:asset_folder_id)
const response = await fetch("https://api.webflow.com/v2/asset_folders/6390c49774a71f0e3c1a08ee", {
  method: "GET",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2"
  },
});
const body = await response.json();
console.log(body);


// Create Asset Folder (POST /sites/:site_id/asset_folders)
const response = await fetch("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/asset_folders", {
  method: "POST",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "displayName": "my asset folder"
  }),
});
const body = await response.json();
console.log(body);



// Upload Asset (POST /sites/:site_id/assets)
const response = await fetch("https://api.webflow.com/v2/sites/580e63e98c9a982ac9b8b741/assets", {
  method: "POST",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "fileName": "file.png",
    "fileHash": "3c7d87c9575702bc3b1e991f4d3c638e"
  }),
});
const body = await response.json();
console.log(body);




// Delete Asset (DELETE /assets/:asset_id)
const response = await fetch("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745", {
  method: "DELETE",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2"
  },
});
const body = await response.json();
console.log(body);



// Update Asset (PATCH /assets/:asset_id)
const response = await fetch("https://api.webflow.com/v2/assets/580e63fc8c9a982ac9b8b745", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer 1c00882f0e42....f8a0be0d83c2",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({}),
});
const body = await response.json();
console.log(body);




# List Items

GET https://api.webflow.com/v2/collections/{collection_id}/items

List of all Items within a Collection.

Required scope | `CMS:read`


Reference: https://developers.webflow.com/data/reference/cms/collection-items/staged-items/list-items

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: List Collection Items
  version: endpoint_collections/items.list-items
paths:
  /collections/{collection_id}/items:
    get:
      operationId: list-items
      summary: List Collection Items
      description: |
        List of all Items within a Collection.

        Required scope | `CMS:read`
      tags:
        - - subpackage_collections
          - subpackage_collections/items
      parameters:
        - name: collection_id
          in: path
          description: Unique identifier for a Collection
          required: true
          schema:
            type: string
            format: objectid
        - name: cmsLocaleId
          in: query
          description: >-
            Unique identifier for a CMS Locale. This UID is different from the
            Site locale identifier and is listed as `cmsLocaleId` in the Sites
            response. To query multiple locales, input a comma separated string.
          required: false
          schema:
            type: string
        - name: offset
          in: query
          description: >-
            Offset used for pagination if the results have more than limit
            records
          required: false
          schema:
            type: number
            format: double
        - name: limit
          in: query
          description: 'Maximum number of records to be returned (max limit: 100)'
          required: false
          schema:
            type: number
            format: double
        - name: name
          in: query
          description: Filter by the exact name of the item(s)
          required: false
          schema:
            type: string
        - name: slug
          in: query
          description: Filter by the exact slug of the item
          required: false
          schema:
            type: string
        - name: lastPublished
          in: query
          description: Filter by the last published date of the item(s)
          required: false
          schema:
            $ref: >-
              #/components/schemas/CollectionsCollectionIdItemsGetParametersLastPublished
        - name: sortBy
          in: query
          description: Sort results by the provided value
          required: false
          schema:
            $ref: >-
              #/components/schemas/CollectionsCollectionIdItemsGetParametersSortBy
        - name: sortOrder
          in: query
          description: Sorts the results by asc or desc
          required: false
          schema:
            $ref: >-
              #/components/schemas/CollectionsCollectionIdItemsGetParametersSortOrder
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/collections_items_list-items_Response_200'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
components:
  schemas:
    CollectionsCollectionIdItemsGetParametersLastPublished:
      type: object
      properties:
        lte:
          type: string
          format: date-time
          description: Filter items last published before this date
        gte:
          type: string
          format: date-time
          description: Filter items last published after this date
    CollectionsCollectionIdItemsGetParametersSortBy:
      type: string
      enum:
        - value: lastPublished
        - value: name
        - value: slug
    CollectionsCollectionIdItemsGetParametersSortOrder:
      type: string
      enum:
        - value: asc
        - value: desc
    CollectionsCollectionIdItemsGetResponsesContentApplicationJsonSchemaItemsItemsFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
      required:
        - name
        - slug
    CollectionsCollectionIdItemsGetResponsesContentApplicationJsonSchemaItemsItems:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsGetResponsesContentApplicationJsonSchemaItemsItemsFieldData
      required:
        - id
        - lastPublished
        - lastUpdated
        - createdOn
        - fieldData
    CollectionsCollectionIdItemsGetResponsesContentApplicationJsonSchemaPagination:
      type: object
      properties:
        limit:
          type: number
          format: double
          default: 100
          description: The limit specified in the request
        offset:
          type: number
          format: double
          default: 0
          description: The offset specified for pagination
        total:
          type: number
          format: double
          description: Total number of items in the collection
    collections_items_list-items_Response_200:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: >-
              #/components/schemas/CollectionsCollectionIdItemsGetResponsesContentApplicationJsonSchemaItemsItems
          description: List of Items within the collection
        pagination:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsGetResponsesContentApplicationJsonSchemaPagination
      required:
        - items
        - pagination

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.list_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    cms_locale_id="cmsLocaleId",
    offset=1.1,
    limit=1.1,
    name="name",
    slug="slug",
    sort_by="lastPublished",
    sort_order="asc",
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.listItems("580e63fc8c9a982ac9b8b745", {
    cmsLocaleId: "cmsLocaleId",
    offset: 1.1,
    limit: 1.1,
    name: "name",
    slug: "slug",
    sortBy: "lastPublished",
    sortOrder: "asc"
});

```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?offset=0&limit=100"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?offset=0&limit=100")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.get("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?offset=0&limit=100")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?offset=0&limit=100', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?offset=0&limit=100");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?offset=0&limit=100")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```


# Get Item

GET https://api.webflow.com/v2/collections/{collection_id}/items/{item_id}

Get details of a selected Collection Item.

Required scope | `CMS:read`


Reference: https://developers.webflow.com/data/reference/cms/collection-items/staged-items/get-item

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Get Collection Item
  version: endpoint_collections/items.get-item
paths:
  /collections/{collection_id}/items/{item_id}:
    get:
      operationId: get-item
      summary: Get Collection Item
      description: |
        Get details of a selected Collection Item.

        Required scope | `CMS:read`
      tags:
        - - subpackage_collections
          - subpackage_collections/items
      parameters:
        - name: collection_id
          in: path
          description: Unique identifier for a Collection
          required: true
          schema:
            type: string
            format: objectid
        - name: item_id
          in: path
          description: Unique identifier for an Item
          required: true
          schema:
            type: string
            format: objectid
        - name: cmsLocaleId
          in: query
          description: >-
            Unique identifier for a CMS Locale. This UID is different from the
            Site locale identifier and is listed as `cmsLocaleId` in the Sites
            response. To query multiple locales, input a comma separated string.
          required: false
          schema:
            type: string
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/collections_items_get-item_Response_200'
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
components:
  schemas:
    CollectionsCollectionIdItemsItemIdGetResponsesContentApplicationJsonSchemaFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
      required:
        - name
        - slug
    collections_items_get-item_Response_200:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsItemIdGetResponsesContentApplicationJsonSchemaFieldData
      required:
        - id
        - lastPublished
        - lastUpdated
        - createdOn
        - isArchived
        - isDraft
        - fieldData

```

## SDK Code Examples

```python
from webflow import Webflow

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.get_item(
    collection_id="580e63fc8c9a982ac9b8b745",
    item_id="580e64008c9a982ac9b8b754",
    cms_locale_id="cmsLocaleId",
)

```

```typescript
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.getItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
    cmsLocaleId: "cmsLocaleId"
});

```

```go
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <token>'

response = http.request(request)
puts response.read_body
```

```java
HttpResponse<String> response = Unirest.get("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754")
  .header("Authorization", "Bearer <token>")
  .asString();
```

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

```csharp
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "Bearer <token>");
IRestResponse response = client.Execute(request);
```

```swift
import Foundation

let headers = ["Authorization": "Bearer <token>"]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/580e64008c9a982ac9b8b754")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```



# Create Items

POST https://api.webflow.com/v2/collections/{collection_id}/items/bulk
Content-Type: application/json

Create an item or multiple items in a CMS Collection across multiple corresponding locales.

<Note>
  - This endpoint can create up to 100 items in a request.
  - If the `cmsLocaleIds` parameter is not included in the request, an item will only be created in the primary locale.
</Note>

Required scope | `CMS:write`


Reference: https://developers.webflow.com/data/reference/cms/collection-items/staged-items/create-item

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Create Collection Items
  version: endpoint_collections/items.create-items
paths:
  /collections/{collection_id}/items/bulk:
    post:
      operationId: create-items
      summary: Create Collection Items
      description: >
        Create an item or multiple items in a CMS Collection across multiple
        corresponding locales.


        <Note>
          - This endpoint can create up to 100 items in a request.
          - If the `cmsLocaleIds` parameter is not included in the request, an item will only be created in the primary locale.
        </Note>


        Required scope | `CMS:write`
      tags:
        - - subpackage_collections
          - subpackage_collections/items
      parameters:
        - name: collection_id
          in: path
          description: Unique identifier for a Collection
          required: true
          schema:
            type: string
            format: objectid
        - name: skipInvalidFiles
          in: query
          description: >-
            When true, invalid files are skipped and processing continues. When
            false, the entire request fails if any file is invalid.
          required: false
          schema:
            type: boolean
            default: true
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '202':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/collections_items_create-items_Response_202
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                cmsLocaleIds:
                  type: array
                  items:
                    type: string
                  description: >-
                    Array of identifiers for the locales where the item will be
                    created
                lastPublished:
                  type: string
                  format: date-string
                  description: The date and time when the item was last published.
                lastUpdated:
                  type: string
                  format: date-string
                  description: The date and time when the item was last updated.
                createdOn:
                  type: string
                  format: date-string
                  description: The date and time when the item was created.
                isArchived:
                  type: boolean
                  default: false
                  description: Indicates whether the item is archived.
                isDraft:
                  type: boolean
                  default: true
                  description: Indicates whether the item is in draft state.
                fieldData:
                  $ref: >-
                    #/components/schemas/CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldData
              required:
                - fieldData
components:
  schemas:
    CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldData0:
      type: object
      properties:
        name:
          type: string
          description: The name of the item.
        slug:
          type: string
          description: >-
            URL slug for the item in your site. 

            Note: Updating the item slug will break all links referencing the
            old slug.
      required:
        - name
        - slug
    CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldDataOneOf1Items:
      type: object
      properties:
        name:
          type: string
          description: The name of the item.
        slug:
          type: string
          description: >-
            URL slug for the item in your site. 

            Note: Updating the item slug will break all links referencing the
            old slug.
      required:
        - name
        - slug
    CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldData1:
      type: array
      items:
        $ref: >-
          #/components/schemas/CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldDataOneOf1Items
    CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldData:
      oneOf:
        - $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldData0
        - $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsBulkPostRequestBodyContentApplicationJsonSchemaFieldData1
    CollectionsCollectionIdItemsBulkPostResponsesContentApplicationJsonSchemaFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
    collections_items_create-items_Response_202:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleIds:
          type: array
          items:
            type: string
          description: Array of identifiers for the locales where the item will be created
        lastPublished:
          type:
            - string
            - 'null'
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsBulkPostResponsesContentApplicationJsonSchemaFieldData
      required:
        - id
        - cmsLocaleIds
        - lastPublished
        - lastUpdated
        - createdOn
        - isArchived
        - isDraft
        - fieldData

```

## SDK Code Examples

```python Single item created across multiple locales
from webflow import Webflow
from webflow.resources.collections.resources.items import SingleCmsItem

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.create_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    cms_locale_ids=[
        "66f6e966c9e1dc700a857ca3",
        "66f6e966c9e1dc700a857ca4",
        "66f6e966c9e1dc700a857ca5",
    ],
    is_archived=False,
    is_draft=False,
    field_data=SingleCmsItem(
        name="Don’t Panic",
        slug="dont-panic",
    ),
)

```

```typescript Single item created across multiple locales
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.createItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Don\u2019t Panic",
        slug: "dont-panic"
    }
});

```

```go Single item created across multiple locales
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Single item created across multiple locales
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'

response = http.request(request)
puts response.read_body
```

```java Single item created across multiple locales
HttpResponse<String> response = Unirest.post("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .asString();
```

```php Single item created across multiple locales
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Single item created across multiple locales
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
IRestResponse response = client.Execute(request);
```

```swift Single item created across multiple locales
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python Multiple items created across multiple locales
from webflow import Webflow
from webflow.resources.collections.resources.items import SingleCmsItem

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.create_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    cms_locale_ids=[
        "66f6e966c9e1dc700a857ca3",
        "66f6e966c9e1dc700a857ca4",
        "66f6e966c9e1dc700a857ca5",
    ],
    is_archived=False,
    is_draft=False,
    field_data=SingleCmsItem(
        name="Don’t Panic",
        slug="dont-panic",
    ),
)

```

```typescript Multiple items created across multiple locales
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.createItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Don\u2019t Panic",
        slug: "dont-panic"
    }
});

```

```go Multiple items created across multiple locales
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Multiple items created across multiple locales
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'

response = http.request(request)
puts response.read_body
```

```java Multiple items created across multiple locales
HttpResponse<String> response = Unirest.post("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .asString();
```

```php Multiple items created across multiple locales
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Multiple items created across multiple locales
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
IRestResponse response = client.Execute(request);
```

```swift Multiple items created across multiple locales
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python Create a single item across multiple locales
from webflow import Webflow
from webflow.resources.collections.resources.items import SingleCmsItem

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.create_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    cms_locale_ids=[
        "66f6e966c9e1dc700a857ca3",
        "66f6e966c9e1dc700a857ca4",
        "66f6e966c9e1dc700a857ca5",
    ],
    is_archived=False,
    is_draft=False,
    field_data=SingleCmsItem(
        name="Don’t Panic",
        slug="dont-panic",
    ),
)

```

```typescript Create a single item across multiple locales
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.createItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
    isArchived: false,
    isDraft: false,
    fieldData: {
        name: "Don\u2019t Panic",
        slug: "dont-panic"
    }
});

```

```go Create a single item across multiple locales
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true"

	payload := strings.NewReader("{\n  \"fieldData\": {\n    \"name\": \"Don’t Panic\",\n    \"slug\": \"dont-panic\"\n  },\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\",\n    \"66f6e966c9e1dc700a857ca5\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Create a single item across multiple locales
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"fieldData\": {\n    \"name\": \"Don’t Panic\",\n    \"slug\": \"dont-panic\"\n  },\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\",\n    \"66f6e966c9e1dc700a857ca5\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}"

response = http.request(request)
puts response.read_body
```

```java Create a single item across multiple locales
HttpResponse<String> response = Unirest.post("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"fieldData\": {\n    \"name\": \"Don’t Panic\",\n    \"slug\": \"dont-panic\"\n  },\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\",\n    \"66f6e966c9e1dc700a857ca5\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}")
  .asString();
```

```php Create a single item across multiple locales
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true', [
  'body' => '{
  "fieldData": {
    "name": "Don’t Panic",
    "slug": "dont-panic"
  },
  "cmsLocaleIds": [
    "66f6e966c9e1dc700a857ca3",
    "66f6e966c9e1dc700a857ca4",
    "66f6e966c9e1dc700a857ca5"
  ],
  "isArchived": false,
  "isDraft": false
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Create a single item across multiple locales
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"fieldData\": {\n    \"name\": \"Don’t Panic\",\n    \"slug\": \"dont-panic\"\n  },\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\",\n    \"66f6e966c9e1dc700a857ca5\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift Create a single item across multiple locales
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "fieldData": [
    "name": "Don’t Panic",
    "slug": "dont-panic"
  ],
  "cmsLocaleIds": ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
  "isArchived": false,
  "isDraft": false
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python Create multiple items across multiple locales
from webflow import Webflow
from webflow.resources.collections.resources.items import (
    CreateBulkCollectionItemRequestBodyFieldDataItem,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.create_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    cms_locale_ids=["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4"],
    is_archived=False,
    is_draft=False,
    field_data=[
        CreateBulkCollectionItemRequestBodyFieldDataItem(
            name="Don’t Panic",
            slug="dont-panic",
        ),
        CreateBulkCollectionItemRequestBodyFieldDataItem(
            name="So Long and Thanks for All the Fish",
            slug="so-long-and-thanks",
        ),
    ],
)

```

```typescript Create multiple items across multiple locales
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.createItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4"],
    isArchived: false,
    isDraft: false,
    fieldData: [{
            name: "Don\u2019t Panic",
            slug: "dont-panic"
        }, {
            name: "So Long and Thanks for All the Fish",
            slug: "so-long-and-thanks"
        }]
});

```

```go Create multiple items across multiple locales
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true"

	payload := strings.NewReader("{\n  \"fieldData\": [\n    {\n      \"name\": \"Don’t Panic\",\n      \"slug\": \"dont-panic\"\n    },\n    {\n      \"name\": \"So Long and Thanks for All the Fish\",\n      \"slug\": \"so-long-and-thanks\"\n    }\n  ],\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Create multiple items across multiple locales
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"fieldData\": [\n    {\n      \"name\": \"Don’t Panic\",\n      \"slug\": \"dont-panic\"\n    },\n    {\n      \"name\": \"So Long and Thanks for All the Fish\",\n      \"slug\": \"so-long-and-thanks\"\n    }\n  ],\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}"

response = http.request(request)
puts response.read_body
```

```java Create multiple items across multiple locales
HttpResponse<String> response = Unirest.post("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"fieldData\": [\n    {\n      \"name\": \"Don’t Panic\",\n      \"slug\": \"dont-panic\"\n    },\n    {\n      \"name\": \"So Long and Thanks for All the Fish\",\n      \"slug\": \"so-long-and-thanks\"\n    }\n  ],\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}")
  .asString();
```

```php Create multiple items across multiple locales
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true', [
  'body' => '{
  "fieldData": [
    {
      "name": "Don’t Panic",
      "slug": "dont-panic"
    },
    {
      "name": "So Long and Thanks for All the Fish",
      "slug": "so-long-and-thanks"
    }
  ],
  "cmsLocaleIds": [
    "66f6e966c9e1dc700a857ca3",
    "66f6e966c9e1dc700a857ca4"
  ],
  "isArchived": false,
  "isDraft": false
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Create multiple items across multiple locales
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true");
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"fieldData\": [\n    {\n      \"name\": \"Don’t Panic\",\n      \"slug\": \"dont-panic\"\n    },\n    {\n      \"name\": \"So Long and Thanks for All the Fish\",\n      \"slug\": \"so-long-and-thanks\"\n    }\n  ],\n  \"cmsLocaleIds\": [\n    \"66f6e966c9e1dc700a857ca3\",\n    \"66f6e966c9e1dc700a857ca4\"\n  ],\n  \"isArchived\": false,\n  \"isDraft\": false\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift Create multiple items across multiple locales
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = [
  "fieldData": [
    [
      "name": "Don’t Panic",
      "slug": "dont-panic"
    ],
    [
      "name": "So Long and Thanks for All the Fish",
      "slug": "so-long-and-thanks"
    ]
  ],
  "cmsLocaleIds": ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4"],
  "isArchived": false,
  "isDraft": false
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/bulk?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```


# Update Items

PATCH https://api.webflow.com/v2/collections/{collection_id}/items
Content-Type: application/json

Update a single item or multiple items in a Collection.

The limit for this endpoint is 100 items.

<Tip title="Localization Tip">Items will only be updated in the primary locale, unless a `cmsLocaleId` is included in the request.</Tip>

Required scope | `CMS:write`


Reference: https://developers.webflow.com/data/reference/cms/collection-items/staged-items/update-items

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Update Collection Items
  version: endpoint_collections/items.update-items
paths:
  /collections/{collection_id}/items:
    patch:
      operationId: update-items
      summary: Update Collection Items
      description: >
        Update a single item or multiple items in a Collection.


        The limit for this endpoint is 100 items.


        <Tip title="Localization Tip">Items will only be updated in the primary
        locale, unless a `cmsLocaleId` is included in the request.</Tip>


        Required scope | `CMS:write`
      tags:
        - - subpackage_collections
          - subpackage_collections/items
      parameters:
        - name: collection_id
          in: path
          description: Unique identifier for a Collection
          required: true
          schema:
            type: string
            format: objectid
        - name: skipInvalidFiles
          in: query
          description: >-
            When true, invalid files are skipped and processing continues. When
            false, the entire request fails if any file is invalid.
          required: false
          schema:
            type: boolean
            default: true
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/collections_items_update-items_Response_200
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
      requestBody:
        description: Details of the item to update
        content:
          application/json:
            schema:
              type: object
              properties:
                items:
                  type: array
                  items:
                    $ref: >-
                      #/components/schemas/CollectionsCollectionIdItemsPatchRequestBodyContentApplicationJsonSchemaItemsItems
components:
  schemas:
    CollectionsCollectionIdItemsPatchRequestBodyContentApplicationJsonSchemaItemsItemsFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
    CollectionsCollectionIdItemsPatchRequestBodyContentApplicationJsonSchemaItemsItems:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsPatchRequestBodyContentApplicationJsonSchemaItemsItemsFieldData
      required:
        - id
    CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf0FieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
      required:
        - name
        - slug
    CollectionsItemsUpdateItemsResponse2000:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf0FieldData
      required:
        - id
        - lastPublished
        - lastUpdated
        - createdOn
        - fieldData
    CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf1ItemsItemsFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
      required:
        - name
        - slug
    CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf1ItemsItems:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf1ItemsItemsFieldData
      required:
        - id
        - lastPublished
        - lastUpdated
        - createdOn
        - fieldData
    CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf1Pagination:
      type: object
      properties:
        limit:
          type: number
          format: double
          default: 100
          description: The limit specified in the request
        offset:
          type: number
          format: double
          default: 0
          description: The offset specified for pagination
        total:
          type: number
          format: double
          description: Total number of items in the collection
    CollectionsItemsUpdateItemsResponse2001:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: >-
              #/components/schemas/CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf1ItemsItems
          description: List of Items within the collection
        pagination:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsPatchResponsesContentApplicationJsonSchemaOneOf1Pagination
    collections_items_update-items_Response_200:
      oneOf:
        - $ref: '#/components/schemas/CollectionsItemsUpdateItemsResponse2000'
        - $ref: '#/components/schemas/CollectionsItemsUpdateItemsResponse2001'

```

## SDK Code Examples

```python LocalizedItems
from webflow import (
    CollectionItemWithIdInput,
    CollectionItemWithIdInputFieldData,
    Webflow,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.update_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    items=[
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Ne Paniquez Pas",
                slug="ne-paniquez-pas",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="No Entrar en Pánico",
                slug="no-entrar-en-panico",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Au Revoir et Merci pour Tous les Poissons",
                slug="au-revoir-et-merci",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="Hasta Luego y Gracias por Todo el Pescado",
                slug="hasta-luego-y-gracias",
            ),
        ),
    ],
)

```

```typescript LocalizedItems
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.updateItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
                featured: false
            }
        }]
});

```

```go LocalizedItems
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true"

	payload := strings.NewReader("{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}")

	req, _ := http.NewRequest("PATCH", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby LocalizedItems
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java LocalizedItems
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}")
  .asString();
```

```php LocalizedItems
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true', [
  'body' => '{
  "items": [
    {
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": {
        "name": "Ne Paniquez Pas",
        "slug": "ne-paniquez-pas",
        "featured": false
      }
    },
    {
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": {
        "name": "No Entrar en Pánico",
        "slug": "no-entrar-en-panico",
        "featured": false
      }
    },
    {
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": {
        "name": "Au Revoir et Merci pour Tous les Poissons",
        "slug": "au-revoir-et-merci",
        "featured": false
      }
    },
    {
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": {
        "name": "Hasta Luego y Gracias por Todo el Pescado",
        "slug": "hasta-luego-y-gracias",
        "featured": false
      }
    }
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp LocalizedItems
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift LocalizedItems
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["items": [
    [
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": [
        "name": "Ne Paniquez Pas",
        "slug": "ne-paniquez-pas",
        "featured": false
      ]
    ],
    [
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": [
        "name": "No Entrar en Pánico",
        "slug": "no-entrar-en-panico",
        "featured": false
      ]
    ],
    [
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": [
        "name": "Au Revoir et Merci pour Tous les Poissons",
        "slug": "au-revoir-et-merci",
        "featured": false
      ]
    ],
    [
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": [
        "name": "Hasta Luego y Gracias por Todo el Pescado",
        "slug": "hasta-luego-y-gracias",
        "featured": false
      ]
    ]
  ]] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python MultipleItems
from webflow import (
    CollectionItemWithIdInput,
    CollectionItemWithIdInputFieldData,
    Webflow,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.update_items(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    items=[
        CollectionItemWithIdInput(
            id="580e64008c9a982ac9b8b754",
            is_archived=False,
            is_draft=False,
            field_data=CollectionItemWithIdInputFieldData(
                name="Senior Data Analyst",
                slug="senior-data-analyst",
            ),
        ),
        CollectionItemWithIdInput(
            id="580e64008c9a982ac9b8b754",
            is_archived=False,
            is_draft=False,
            field_data=CollectionItemWithIdInputFieldData(
                name="Product Manager",
                slug="product-manager",
            ),
        ),
    ],
)

```

```typescript MultipleItems
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.updateItems("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "580e64008c9a982ac9b8b754",
            isArchived: false,
            isDraft: false,
            fieldData: {
                name: "Senior Data Analyst",
                slug: "senior-data-analyst",
                url: "https://boards.greenhouse.io/webflow/jobs/26567701",
                department: "Data"
            }
        }, {
            id: "580e64008c9a982ac9b8b754",
            isArchived: false,
            isDraft: false,
            fieldData: {
                name: "Product Manager",
                slug: "product-manager",
                url: "https://boards.greenhouse.io/webflow/jobs/31234567",
                department: "Product"
            }
        }]
});

```

```go MultipleItems
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true"

	payload := strings.NewReader("{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}")

	req, _ := http.NewRequest("PATCH", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby MultipleItems
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java MultipleItems
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}")
  .asString();
```

```php MultipleItems
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true', [
  'body' => '{
  "items": [
    {
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Senior Data Analyst",
        "slug": "senior-data-analyst",
        "url": "https://boards.greenhouse.io/webflow/jobs/26567701",
        "department": "Data"
      }
    },
    {
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Product Manager",
        "slug": "product-manager",
        "url": "https://boards.greenhouse.io/webflow/jobs/31234567",
        "department": "Product"
      }
    }
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp MultipleItems
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift MultipleItems
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["items": [
    [
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": [
        "name": "Senior Data Analyst",
        "slug": "senior-data-analyst",
        "url": "https://boards.greenhouse.io/webflow/jobs/26567701",
        "department": "Data"
      ]
    ],
    [
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": [
        "name": "Product Manager",
        "slug": "product-manager",
        "url": "https://boards.greenhouse.io/webflow/jobs/31234567",
        "department": "Product"
      ]
    ]
  ]] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()

```



# Update Live Items

PATCH https://api.webflow.com/v2/collections/{collection_id}/items/live
Content-Type: application/json

Update a single published item or multiple published items (up to 100) in a Collection

<Tip title="Localization Tip">Items will only be updated in the primary locale, unless a `cmsLocaleId` is included in the request.</Tip>

Required scope | `CMS:write`


Reference: https://developers.webflow.com/data/reference/cms/collection-items/live-items/update-items-live

## OpenAPI Specification

```yaml
openapi: 3.1.1
info:
  title: Update Live Collection Items
  version: endpoint_collections/items.update-items-live
paths:
  /collections/{collection_id}/items/live:
    patch:
      operationId: update-items-live
      summary: Update Live Collection Items
      description: >
        Update a single published item or multiple published items (up to 100)
        in a Collection


        <Tip title="Localization Tip">Items will only be updated in the primary
        locale, unless a `cmsLocaleId` is included in the request.</Tip>


        Required scope | `CMS:write`
      tags:
        - - subpackage_collections
          - subpackage_collections/items
      parameters:
        - name: collection_id
          in: path
          description: Unique identifier for a Collection
          required: true
          schema:
            type: string
            format: objectid
        - name: skipInvalidFiles
          in: query
          description: >-
            When true, invalid files are skipped and processing continues. When
            false, the entire request fails if any file is invalid.
          required: false
          schema:
            type: boolean
            default: true
        - name: Authorization
          in: header
          description: >-
            Bearer authentication of the form `Bearer <token>`, where token is
            your auth token.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/collections_items_update-items-live_Response_200
        '400':
          description: Request body was incorrectly formatted.
          content: {}
        '401':
          description: >-
            Provided access token is invalid or does not have access to
            requested resource
          content: {}
        '404':
          description: Requested resource not found
          content: {}
        '409':
          description: Conflict with server data. Item not published
          content: {}
        '429':
          description: >-
            The rate limit of the provided access_token has been reached. Please
            have your application respect the X-RateLimit-Remaining header we
            include on API responses.
          content: {}
        '500':
          description: We had a problem with our server. Try again later.
          content: {}
      requestBody:
        description: Details of the live items to update
        content:
          application/json:
            schema:
              type: object
              properties:
                items:
                  type: array
                  items:
                    $ref: >-
                      #/components/schemas/CollectionsCollectionIdItemsLivePatchRequestBodyContentApplicationJsonSchemaItemsItems
components:
  schemas:
    CollectionsCollectionIdItemsLivePatchRequestBodyContentApplicationJsonSchemaItemsItemsFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
    CollectionsCollectionIdItemsLivePatchRequestBodyContentApplicationJsonSchemaItemsItems:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsLivePatchRequestBodyContentApplicationJsonSchemaItemsItemsFieldData
      required:
        - id
    CollectionsCollectionIdItemsLivePatchResponsesContentApplicationJsonSchemaItemsItemsFieldData:
      type: object
      properties:
        name:
          type: string
          description: Name of the Item
        slug:
          type: string
          description: >-
            URL structure of the Item in your site. Note: Updates to an item
            slug will break all links referencing the old slug.
      required:
        - name
        - slug
    CollectionsCollectionIdItemsLivePatchResponsesContentApplicationJsonSchemaItemsItems:
      type: object
      properties:
        id:
          type: string
          description: Unique identifier for the Item
        cmsLocaleId:
          type: string
          description: Identifier for the locale of the CMS item
        lastPublished:
          type: string
          format: date-string
          description: The date the item was last published
        lastUpdated:
          type: string
          format: date-string
          description: The date the item was last updated
        createdOn:
          type: string
          format: date-string
          description: The date the item was created
        isArchived:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to archived
        isDraft:
          type: boolean
          default: false
          description: Boolean determining if the Item is set to draft
        fieldData:
          $ref: >-
            #/components/schemas/CollectionsCollectionIdItemsLivePatchResponsesContentApplicationJsonSchemaItemsItemsFieldData
      required:
        - id
        - lastPublished
        - lastUpdated
        - createdOn
        - fieldData
    collections_items_update-items-live_Response_200:
      type: object
      properties:
        items:
          type: array
          items:
            $ref: >-
              #/components/schemas/CollectionsCollectionIdItemsLivePatchResponsesContentApplicationJsonSchemaItemsItems
          description: List of Items within the collection

```

## SDK Code Examples

```python Multiple items updated across multiple locales
from webflow import (
    CollectionItemWithIdInput,
    CollectionItemWithIdInputFieldData,
    Webflow,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.update_items_live(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    items=[
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Ne Paniquez Pas",
                slug="ne-paniquez-pas",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="No Entrar en Pánico",
                slug="no-entrar-en-panico",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Au Revoir et Merci pour Tous les Poissons",
                slug="au-revoir-et-merci",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="Hasta Luego y Gracias por Todo el Pescado",
                slug="hasta-luego-y-gracias",
            ),
        ),
    ],
)

```

```typescript Multiple items updated across multiple locales
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.updateItemsLive("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
                featured: false
            }
        }]
});

```

```go Multiple items updated across multiple locales
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true"

	req, _ := http.NewRequest("PATCH", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Multiple items updated across multiple locales
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'

response = http.request(request)
puts response.read_body
```

```java Multiple items updated across multiple locales
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .asString();
```

```php Multiple items updated across multiple locales
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Multiple items updated across multiple locales
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
IRestResponse response = client.Execute(request);
```

```swift Multiple items updated across multiple locales
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python Multiple items updated in a single locale
from webflow import (
    CollectionItemWithIdInput,
    CollectionItemWithIdInputFieldData,
    Webflow,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.update_items_live(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    items=[
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Ne Paniquez Pas",
                slug="ne-paniquez-pas",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="No Entrar en Pánico",
                slug="no-entrar-en-panico",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Au Revoir et Merci pour Tous les Poissons",
                slug="au-revoir-et-merci",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="Hasta Luego y Gracias por Todo el Pescado",
                slug="hasta-luego-y-gracias",
            ),
        ),
    ],
)

```

```typescript Multiple items updated in a single locale
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.updateItemsLive("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
                featured: false
            }
        }]
});

```

```go Multiple items updated in a single locale
package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true"

	req, _ := http.NewRequest("PATCH", url, nil)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby Multiple items updated in a single locale
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'

response = http.request(request)
puts response.read_body
```

```java Multiple items updated in a single locale
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .asString();
```

```php Multiple items updated in a single locale
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true', [
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp Multiple items updated in a single locale
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
IRestResponse response = client.Execute(request);
```

```swift Multiple items updated in a single locale
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python LocalizedItems
from webflow import (
    CollectionItemWithIdInput,
    CollectionItemWithIdInputFieldData,
    Webflow,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.update_items_live(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    items=[
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Ne Paniquez Pas",
                slug="ne-paniquez-pas",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5ea6",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="No Entrar en Pánico",
                slug="no-entrar-en-panico",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca5",
            field_data=CollectionItemWithIdInputFieldData(
                name="Au Revoir et Merci pour Tous les Poissons",
                slug="au-revoir-et-merci",
            ),
        ),
        CollectionItemWithIdInput(
            id="66f6ed9576ddacf3149d5eaa",
            cms_locale_id="66f6e966c9e1dc700a857ca4",
            field_data=CollectionItemWithIdInputFieldData(
                name="Hasta Luego y Gracias por Todo el Pescado",
                slug="hasta-luego-y-gracias",
            ),
        ),
    ],
)

```

```typescript LocalizedItems
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.updateItemsLive("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Ne Paniquez Pas",
                slug: "ne-paniquez-pas",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5ea6",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "No Entrar en P\u00E1nico",
                slug: "no-entrar-en-panico",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca5",
            fieldData: {
                name: "Au Revoir et Merci pour Tous les Poissons",
                slug: "au-revoir-et-merci",
                featured: false
            }
        }, {
            id: "66f6ed9576ddacf3149d5eaa",
            cmsLocaleId: "66f6e966c9e1dc700a857ca4",
            fieldData: {
                name: "Hasta Luego y Gracias por Todo el Pescado",
                slug: "hasta-luego-y-gracias",
                featured: false
            }
        }]
});

```

```go LocalizedItems
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true"

	payload := strings.NewReader("{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}")

	req, _ := http.NewRequest("PATCH", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby LocalizedItems
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java LocalizedItems
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}")
  .asString();
```

```php LocalizedItems
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true', [
  'body' => '{
  "items": [
    {
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": {
        "name": "Ne Paniquez Pas",
        "slug": "ne-paniquez-pas",
        "featured": false
      }
    },
    {
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": {
        "name": "No Entrar en Pánico",
        "slug": "no-entrar-en-panico",
        "featured": false
      }
    },
    {
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": {
        "name": "Au Revoir et Merci pour Tous les Poissons",
        "slug": "au-revoir-et-merci",
        "featured": false
      }
    },
    {
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": {
        "name": "Hasta Luego y Gracias por Todo el Pescado",
        "slug": "hasta-luego-y-gracias",
        "featured": false
      }
    }
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp LocalizedItems
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"items\": [\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Ne Paniquez Pas\",\n        \"slug\": \"ne-paniquez-pas\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5ea6\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"No Entrar en Pánico\",\n        \"slug\": \"no-entrar-en-panico\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca5\",\n      \"fieldData\": {\n        \"name\": \"Au Revoir et Merci pour Tous les Poissons\",\n        \"slug\": \"au-revoir-et-merci\",\n        \"featured\": false\n      }\n    },\n    {\n      \"id\": \"66f6ed9576ddacf3149d5eaa\",\n      \"cmsLocaleId\": \"66f6e966c9e1dc700a857ca4\",\n      \"fieldData\": {\n        \"name\": \"Hasta Luego y Gracias por Todo el Pescado\",\n        \"slug\": \"hasta-luego-y-gracias\",\n        \"featured\": false\n      }\n    }\n  ]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift LocalizedItems
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["items": [
    [
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": [
        "name": "Ne Paniquez Pas",
        "slug": "ne-paniquez-pas",
        "featured": false
      ]
    ],
    [
      "id": "66f6ed9576ddacf3149d5ea6",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": [
        "name": "No Entrar en Pánico",
        "slug": "no-entrar-en-panico",
        "featured": false
      ]
    ],
    [
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca5",
      "fieldData": [
        "name": "Au Revoir et Merci pour Tous les Poissons",
        "slug": "au-revoir-et-merci",
        "featured": false
      ]
    ],
    [
      "id": "66f6ed9576ddacf3149d5eaa",
      "cmsLocaleId": "66f6e966c9e1dc700a857ca4",
      "fieldData": [
        "name": "Hasta Luego y Gracias por Todo el Pescado",
        "slug": "hasta-luego-y-gracias",
        "featured": false
      ]
    ]
  ]] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

```python MultipleItems
from webflow import (
    CollectionItemWithIdInput,
    CollectionItemWithIdInputFieldData,
    Webflow,
)

client = Webflow(
    access_token="YOUR_ACCESS_TOKEN",
)
client.collections.items.update_items_live(
    collection_id="580e63fc8c9a982ac9b8b745",
    skip_invalid_files=True,
    items=[
        CollectionItemWithIdInput(
            id="580e64008c9a982ac9b8b754",
            is_archived=False,
            is_draft=False,
            field_data=CollectionItemWithIdInputFieldData(
                name="Senior Data Analyst",
                slug="senior-data-analyst",
            ),
        ),
        CollectionItemWithIdInput(
            id="580e64008c9a982ac9b8b754",
            is_archived=False,
            is_draft=False,
            field_data=CollectionItemWithIdInputFieldData(
                name="Product Manager",
                slug="product-manager",
            ),
        ),
    ],
)

```

```typescript MultipleItems
import { WebflowClient } from "webflow-api";

const client = new WebflowClient({ accessToken: "YOUR_ACCESS_TOKEN" });
await client.collections.items.updateItemsLive("580e63fc8c9a982ac9b8b745", {
    skipInvalidFiles: true,
    items: [{
            id: "580e64008c9a982ac9b8b754",
            isArchived: false,
            isDraft: false,
            fieldData: {
                name: "Senior Data Analyst",
                slug: "senior-data-analyst",
                url: "https://boards.greenhouse.io/webflow/jobs/26567701",
                department: "Data"
            }
        }, {
            id: "580e64008c9a982ac9b8b754",
            isArchived: false,
            isDraft: false,
            fieldData: {
                name: "Product Manager",
                slug: "product-manager",
                url: "https://boards.greenhouse.io/webflow/jobs/31234567",
                department: "Product"
            }
        }]
});

```

```go MultipleItems
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io"
)

func main() {

	url := "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true"

	payload := strings.NewReader("{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}")

	req, _ := http.NewRequest("PATCH", url, payload)

	req.Header.Add("Authorization", "Bearer <token>")
	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```ruby MultipleItems
require 'uri'
require 'net/http'

url = URI("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Patch.new(url)
request["Authorization"] = 'Bearer <token>'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}"

response = http.request(request)
puts response.read_body
```

```java MultipleItems
HttpResponse<String> response = Unirest.patch("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")
  .header("Authorization", "Bearer <token>")
  .header("Content-Type", "application/json")
  .body("{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}")
  .asString();
```

```php MultipleItems
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PATCH', 'https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true', [
  'body' => '{
  "items": [
    {
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Senior Data Analyst",
        "slug": "senior-data-analyst",
        "url": "https://boards.greenhouse.io/webflow/jobs/26567701",
        "department": "Data"
      }
    },
    {
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Product Manager",
        "slug": "product-manager",
        "url": "https://boards.greenhouse.io/webflow/jobs/31234567",
        "department": "Product"
      }
    }
  ]
}',
  'headers' => [
    'Authorization' => 'Bearer <token>',
    'Content-Type' => 'application/json',
  ],
]);

echo $response->getBody();
```

```csharp MultipleItems
var client = new RestClient("https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true");
var request = new RestRequest(Method.PATCH);
request.AddHeader("Authorization", "Bearer <token>");
request.AddHeader("Content-Type", "application/json");
request.AddParameter("application/json", "{\n  \"items\": [\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Senior Data Analyst\",\n        \"slug\": \"senior-data-analyst\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/26567701\",\n        \"department\": \"Data\"\n      }\n    },\n    {\n      \"id\": \"580e64008c9a982ac9b8b754\",\n      \"isArchived\": false,\n      \"isDraft\": false,\n      \"fieldData\": {\n        \"name\": \"Product Manager\",\n        \"slug\": \"product-manager\",\n        \"url\": \"https://boards.greenhouse.io/webflow/jobs/31234567\",\n        \"department\": \"Product\"\n      }\n    }\n  ]\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

```swift MultipleItems
import Foundation

let headers = [
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
]
let parameters = ["items": [
    [
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": [
        "name": "Senior Data Analyst",
        "slug": "senior-data-analyst",
        "url": "https://boards.greenhouse.io/webflow/jobs/26567701",
        "department": "Data"
      ]
    ],
    [
      "id": "580e64008c9a982ac9b8b754",
      "isArchived": false,
      "isDraft": false,
      "fieldData": [
        "name": "Product Manager",
        "slug": "product-manager",
        "url": "https://boards.greenhouse.io/webflow/jobs/31234567",
        "department": "Product"
      ]
    ]
  ]] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.webflow.com/v2/collections/580e63fc8c9a982ac9b8b745/items/live?skipInvalidFiles=true")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PATCH"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```




CMS ITEM

{
  "id": "692d6f90406f6bd882c79390",
  "cmsLocaleId": "692bb5a6a1166445d9c18efc",
  "lastPublished": "2025-12-01T14:45:47.922Z",
  "lastUpdated": "2025-12-16T11:50:55.590Z",
  "createdOn": "2025-12-01T10:36:00.011Z",
  "isArchived": false,
  "isDraft": true,
  "fieldData": {
    "date-added": "1960-06-25T00:00:00.000Z",
    "active": true,
    "date": "2025-12-01T00:00:00.000Z",
    "approved": true,
    "synced": false,
    "even-number": false,
    "origin": "b05f4836f7794c4b81e9cfc900c8e186",
    "event-number": 1,
    "event-name-main": "Begins It's a Girl",
    "name": "Life's Journey Begins It's a Girl",
    "event-type": "Birthdate",
    "description": "Patricia Sue Montgomery is Born to Lilian (Sue) & Gary Montgomery, their 2nd Child and First Girl in Boulder Colorado.",
    "event-name": "Life's Journey ",
    "photo-1": {
      "fileId": "692d6f8cf9deb1eae281add4",
      "url": "https://cdn.prod.website-files.com/692bb5a6a1166445d9c18efd/692d6f8cf9deb1eae281add4_IMG_0850-Edit-2-2.jpg",
      "alt": null
    },
    "slug": "lifes-journey-begins-its-a-girl",
    "timeline-location": "Boulder, CO"
  }
}


GET ITEM

https://api.webflow.com/v2/collections/692bb5a629f57df04fe7dd5f/items/694290a29c5df7c396424c2c

{
  "id": "694290a29c5df7c396424c2c",
  "cmsLocaleId": "692bb5a6a1166445d9c18efc",
  "lastPublished": null,
  "lastUpdated": "2025-12-17T11:14:42.097Z",
  "createdOn": "2025-12-17T11:14:42.097Z",
  "isArchived": false,
  "isDraft": true,
  "fieldData": {
    "permalink": null,
    "even-number": false,
    "date": "2025-12-17T11:14:41.888Z",
    "date-added": "2025-01-01T00:00:00.000Z",
    "email": "images@example.com",
    "synced": false,
    "approved": false,
    "active": true,
    "event-type": null,
    "event-number": 101,
    "origin": "b05f4836f7794c4b81e9cfc900c8e186",
    "name": "Test Event - One Image",
    "event-name": "Test Event - One Image",
    "event-name-main": "Image Test",
    "description": "Testing with one image upload",
    "timeline-location": "Image Test City",
    "full-name": "Image Tester",
    "posted-by-user-name": "Image Tester",
    "edit-code": "ISUHRM",
    "slug": "test-event-one-image"
  }
}
