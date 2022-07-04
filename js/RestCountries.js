class RestCountries {
    baseUrl = "https://restcountries.com/v3";
    async getAll() {
        const response = await fetch(`${this.baseUrl}/all`);
        const result = await response.json();
        return result;
    };
    async getRegion(region) {
        let response;
        if (region == "all") {
            response = await fetch(`${this.baseUrl}/${region}`);
        } else {
            response = await fetch(`${this.baseUrl}/region/${region}`);
        }
        const result = await response.json();
        return result;
    };
    async getSearch(search) {
        const response = await fetch(`${this.baseUrl}/name/${search}`);
        const result = await response.json();
        return result;
    };
    async getCountry(name) {
        const response = await fetch(`${this.baseUrl}/name/${name}?fullText=true`);
        const result = await response.json();
        return result;
    }
}

export default RestCountries;