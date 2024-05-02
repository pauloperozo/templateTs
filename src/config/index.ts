import { env } from 'node:process';

export default {
    server: {
        env: env.NODE_ENV || 'develop',
        port: env.PORT || 4500
    },

    auth: {
        ios: {
            google: {
                googleClientIdProd: env.GOOGLE_CLIENT_ID_IOS_APP
            },
            apple: {
                appleClientId: env.APPLE_CLIENT_ID
            }
        },
        web: {
            google: {
                googleClientId: env.GOOGLE_CLIENT_ID_WEB,
                googleClientSecret: env.GOOGLE_CLIENT_SECRET_WEB
            },
            apple: {
                appleClientId: env.APPLE_CLIENT_ID_WEB
            }
        },
        demoCredentials: {
            user: env.DEMO_USER,
            pass: env.DEMO_PASS
        },
        guestCredentials: {
            user: env.GUEST_USER,
            pass: env.GUEST_PASS
        },
        maxBlockAttempts: env.MAX_ATTEMPTS_TO_BLOCK_ACCOUNT
    },
    db: {
        dbUser: env.DBCUSTOMERSUSER,
        dbPasword: env.DBCUSTOMERSPASS,
        dbHost: env.DBCUSTOMERSHOST,
        dbName: env.DBCUSTOMERSNAME,
        dbType: env.DBCUSTOMERSTYPE,
        dbPort: env.DBCUSTOMERSPORT
    },
    shopify: {
        domain: env.SHOPIFY_DOMAIN,
        key: env.SHOPIFY_KEY,
        token: env.SHOPIFY_TOKEN,
        webhookKey: env.SHOPIFY_WEBHOOK_KEY,
        topupToken: env.SHOPIFY_TOPUP_TOKEN,
        secretKey: env.SHOPIFY_SECRET_KEY
    },
    jwt: {
        publicUrls: env.JWT_PUBLIC_URLS,
        noMatchingHosts: env.JWT_NO_MATCHING_HOSTS,
        secret: env.JWT_SECRET
    },
    providers: {
        threeAu: {
            systemId: env.THREEAUSTRIA_SYSTEM_ID,
            cdUser: env.THREEAUSTRIA_CD_USER,
            cdPassword: env.THREEAUSTRIA_CD_PASSWORD,
            apiUrl: env.THREEAUSTRIA_API_URL
        },
        chinamobile: {
            dev: {
                endpoint: env.CHINAMOBILE_ENDPOINT,
                secret: env.CHINAMOBILE_SECRET,
                appKey: env.CHINAMOBILE_APPKEY
            },
            prod: {
                endpoint: env.CHINAMOBILE_ENDPOINT,
                appKey: env.CHINAMOBILE_APPKEY,
                secret: env.CHINAMOBILE_SECRET
            }
        }
    },
    sparkpost: {
        secret: env.SPARKPOST_SECRET,
        mailFromName: env.MAIL_FROM_NAME,
        mailFromAddress: env.MAIL_FROM_ADDRESS,
        mailLangs: env.ESIM_MAIL_LANGS
    },
    translations: {
        base_url: env.TRANSLATION_SERVICE_URL,
        api_key: env.TRANSLATION_API_KEY,
        languages: env.TRANSLATION_LANGUAGES
    },
    voiceProducts: {
        names: env.VOICE_PRODUCT_NAMES?.split(','),
        ids: env.VOICE_PRODUCT_IDS?.split(',')
    },
    microservice: {
        sparkpost: {
            baseUrl: env.SPARKPOST_MS_BASE_URL
        },
        providers: {
            baseUrl: env.PROVIDERS_SERVICE_URL,
            actions: {
                ACTIVATE: 'ACTIVATE',
                SUSPEND: 'SUSPEND',
                CONSULT: 'CONSULT'
            }
        },
        delivery: {
            baseUrl: env.DELIVERY_API_URL
        },
        hf_printer_api: env.HF_PRINTER_API_URL
    },
    yotpo: {
        api_key: env.YOTPO_API_KEY,
        guid: env.YOTPO_GUID
    },
    LoginHistory: {
        elastic: {
            endpoint: env.ELASTICSEARCH_ENDPOINT,
            key: env.ELASTICSEARCH_KEY,
            index: 'search-loginhistory'
        },
        hash: {
            secret: env.HASH_SECRET,
            signature: env.HASH_SIGNATURE,
            fields: 'first_name,last_name,email'
        }
    },
    klaviyo: {
        token: env.KLAVIYO_TOKEN
    },
    qualtrics: {
        token: env.QUALTRICS_TOKEN
    },
    userDelete: {
        form: 'https://form.typeform.com/to/ByTsveba',
        fields: {
            customer: ['first_name', 'last_name', 'email'],
            customerProfile: [
                'firstName',
                'lastName',
                'phone',
                'addressLine1',
                'addressLine2',
                'city',
                'region',
                'postalCode',
                'country',
                'languaje',
                'currency',
                'emailNotifications'
            ],
            customerMail: ['mail', 'verificationCode', 'name'],
            customerCard: []
        },
        lang: ['es', 'en', 'it', 'fr', 'de', 'pt', 'ja']
    },
    tapfilate: {
        api_key: env.TAPFILIATE_API_KEY
    }
};
