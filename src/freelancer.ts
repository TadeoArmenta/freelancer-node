import { IConstants } from "./lib/interfaces";

export namespace Freelancer {
    export const Constants : IConstants = {
        DEFAULT_HOST:"www.freelancer.com",
        DEFAULT_PORT:"443",
        DEFAULT_PATH:"/api/"
    }

    export function init(token: string){
        Constants.DEVELOPER_TOKEN = token;
    }
}