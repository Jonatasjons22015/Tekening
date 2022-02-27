'use strict';

/**
 * Base class which all authentication strategies extend
 */
class AuthStrategy {
    constructor() {}
    setup(client) {
        this.client = client;
    }
    async beforeBrowserInitialized() {}
    async afterBrowserInitialized() {}
    async onAuthenticationNeeded() {
        return {
            failed: false,
            restart: false,
            failureEventPayload: undefined
        };
    }
    async getAuthEventPayload() {}
    async logout() {}
}

module.exports = AuthStrategy;