import BaseModel from '../../BaseModel';

class MyInfoModel extends BaseModel {
    constructor() {
        super();

        this._view = {
            consumerId: String,
            name: String,
            email: String,
            gender: String,
            height: Number,
            weight: Number,
            birthYear: Number,
            birthMonth: Number,
            birthDay: Number,
            termsAdvertisement: String,
            lastAccessDt: String,
            corpType: String,
            wardrobeViewerCount: Number,
            shoulderLevel: Number,
            chestLevel: Number,
            hubLevel: Number,
            hipLevel: Number,
            thighLevel: Number,
            shoulderSensibilityLevel: Number,
            chestSensibilityLevel: Number,
            hubSensibilityLevel: Number,
            hipSensibilityLevel: Number,
            thighSensibilityLevel: Number,
            bodyResponses: Array
        };

        this._model = {
            name: String,
            birthYear: Number,
            birthMonth: Number,
            birthDay: Number,
            gender: String,
            termsAdvertisement: String
        };
    }

    /**
     * @override
     */
    setView(data = {}) {
        const {
            consumerId,
            name,
            email,
            gender,
            height,
            weight,
            birthYear,
            birthMonth,
            birthDay,
            termsAdvertisement,
            lastAccessDt,
            corpType,
            wardrobeViewerCount,
            shoulderLevel,
            chestLevel,
            hubLevel,
            hipLevel,
            thighLevel,
            shoulderSensibilityLevel,
            chestSensibilityLevel,
            hubSensibilityLevel,
            hipSensibilityLevel,
            thighSensibilityLevel,
            bodyResponses
        } = data;
        this._view.consumerId = consumerId;
        this._view.name = name;
        this._view.email = email;
        this._view.gender = gender || '';
        this._view.height = height || 0;
        this._view.weight = weight || 0;
        this._view.birthYear = birthYear || 0;
        this._view.birthMonth = birthMonth || 0;
        this._view.birthDay = birthDay || 0;
        this._view.termsAdvertisement = termsAdvertisement;
        this._view.lastAccessDt = lastAccessDt || '';
        this._view.corpType = corpType;
        this._view.wardrobeViewerCount = wardrobeViewerCount || 0;
        this._view.shoulderLevel = shoulderLevel || 0;
        this._view.chestLevel = chestLevel || 0;
        this._view.hubLevel = hubLevel || 0;
        this._view.hipLevel = hipLevel || 0;
        this._view.thighLevel = thighLevel || 0;
        this._view.shoulderSensibilityLevel = shoulderSensibilityLevel || 0;
        this._view.chestSensibilityLevel = chestSensibilityLevel || 0;
        this._view.hubSensibilityLevel = hubSensibilityLevel || 0;
        this._view.hipSensibilityLevel = hipSensibilityLevel || 0;
        this._view.thighSensibilityLevel = thighSensibilityLevel || 0;
        this._view.bodyResponses = bodyResponses || [];
        return this;
    }

    /**
     * @override
     */
    setData({ data = {} }) {
        const {
            name,
            birthYear,
            birthMonth,
            birthDay,
            gender,
            termsAdvertisement
        } = data;

        this._model.name = name;
        this._model.birthYear = birthYear || 0;
        this._model.birthMonth = birthMonth || 0;
        this._model.birthDay = birthDay || 0;
        this._model.gender = gender || '';
        this._model.termsAdvertisement = termsAdvertisement;

        return this;
    }
}

export default MyInfoModel;
