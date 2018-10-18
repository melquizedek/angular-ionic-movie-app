import { AuthServiceConfig, FacebookLoginProvider } from "angular5-social-login";

export function getAuthServiceConfigs() {
    
    let conf = new AuthServiceConfig([
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("1111010285741787")
        }
    ]);

    return conf;
}