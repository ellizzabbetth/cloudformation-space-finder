import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.TABLE_NAME = "SpaceTable-0e36c8cd403d"


handler({
    httpMethod: 'POST',
    // queryStringParameters: {
    //     id:'6eb6cab5-9612-4052-ba03-eba73ff7b739'
    // },
    body: JSON.stringify({
        location: 'London updated'
    })
} as any, {} as any).then(result =>  {
    console.log(result);
});