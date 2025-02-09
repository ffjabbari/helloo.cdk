import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketx = new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });

    cdk.Tags.of(bucketx).add("key1", "value1");
    cdk.Tags.of(bucketx).add("key2", "value2");
  }
}
