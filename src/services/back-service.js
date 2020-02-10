export default class BackService {

    _backUrl = "http://localhost:8080/back/";

    getResource = async (url) => {

        console.log(`Resource url: ${this._backUrl}${url}`);

        const resource =
            await fetch(
                `${this._backUrl}${url}`,
                {
                    method: 'get',
                    headers: new Headers({
                        'Content-type': 'application/json'
                    })
                });

        if (!resource.ok) {
            throw new Error(`Unable to fetch ${url}, received ${resource.status}`);
        }

        return await resource.json();
    };

    getExercises = async () => {
        return await this.getResource("exercise");
    }

    getExercise = async (id) => {
        return await this.getResource(`exercise/${id}`);
    }
}
