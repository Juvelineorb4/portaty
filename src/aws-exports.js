/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://fuzb4c27pzdkfea7mvbjrkq3li.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_cognito_identity_pool_id": "us-east-1:12bb708f-8ea3-49b9-a74a-2081b378ceac",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_xrukmGZfB",
    "aws_user_pools_web_client_id": "7to8s8267vbngfpulnmahr5731",
    "oauth": {
        "domain": "portaty-oauth-dev.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "exp://192.168.1.41:19000/--/,exp://u.expo.dev/ff8431c6-5beb-4277-b29b-ab544b6af4b3?channel-name=dev&runtime-version=exposdk:48.0.0/,expo://,exp://,expo://",
        "redirectSignOut": "exp://192.168.1.41:19000/--/,exp://u.expo.dev/ff8431c6-5beb-4277-b29b-ab544b6af4b3?channel-name=dev&runtime-version=exposdk:48.0.0/,exp://,exp://,exp://,exp://",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL",
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "portaty-storage165121-dev",
    "aws_user_files_s3_bucket_region": "us-east-1"
};


export default awsmobile;
