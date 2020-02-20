export default class BackService {

    _backUrl = "http://localhost:8080/back/";

    getResource = async (url) => {

        console.log(`Resource get: ${this._backUrl}${url}`);

        const resource =
            await fetch(
                `${this._backUrl}${url}`,
                {
                    method: 'get',
                    headers: { 'Content-type': 'application/json' }
                });

        if (!resource.ok) {
            throw new Error(`Unable to get ${url}, received ${resource.status}`);
        }

        return await resource.json();
    };

    postResource = async (url, body) => {

        console.log(`Resource post: ${this._backUrl}${url}`);

        const resource =
            await fetch(
                `${this._backUrl}${url}`,
                {
                    method: 'post',
                    headers: { 'Content-type': 'application/json' },
                    body: body
                });

        if (!resource.ok) {
            throw new Error(`Unable to post ${url}, received ${resource.status}`);
        }

        return await resource.json();
    };

    getExercises = async () => {
        return await this.getResource("exercise");
    };

    getExercise = async (id) => {
        return await this.getResource(`exercise/${id}`);
    };

    persistExercise = async (exercise) => {
        return await this.postResource("exercise", exercise);
    };
}
