class BaseModel {
    constructor() {
        // FRONT > BACK-END
        this._model = {};
        // BACK-END > FRONT
        this._view = {};
        return this;
    }

    setData(data = {}) {
        this._model = Object.assign({}, this._model, data);
        return this;
    }

    setView(data = {}) {
        this._view = Object.assign({}, this._model, data);
        return this;
    }

    setDataByModel(data = {}) {
        Object.keys(data).forEach(key => {
            if (this._model.hasOwnProperty(key)) {
                this._model[key] = data[key];
            }
        });
        return this;
    }

    setDataByView(data = {}) {
        Object.keys(data).forEach(key => {
            if (this._view.hasOwnProperty(key)) {
                this._view[key] = data[key];
            }
        });
        return this;
    }

    // FRONT > BACK-END
    toModel() {
        return this._model;
    }

    // BACK-END > FRONT
    toView() {
        return this._view;
    }
}

export default BaseModel;
