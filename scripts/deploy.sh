#!/bin/bash

S3_BUCKET_NAME=$1
CF_ID=$2

# Build app
yarn install --force
yarn build

# Sync all files except for service-worker and index
echo "Uploading files to $S3_BUCKET_NAME..."
aws s3 sync out s3://$S3_BUCKET_NAME/ \
  --exclude index.html

# # Upload index.html
echo "Uploading index.html"
aws s3 cp out/index.html s3://$S3_BUCKET_NAME/index.html \
  --metadata-directive REPLACE \
  --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --content-type text/html

# # Purge the cloudfront cache
echo "Purging the cache for CloudFront (BE PATIENT!)"
aws cloudfront create-invalidation \
  --distribution-id $CF_ID \
  --paths / |
  jq ".Invalidation.Id" -r |
  aws cloudfront wait invalidation-completed \
    --distribution-id $CF_ID \
    --id "$(cat)"
