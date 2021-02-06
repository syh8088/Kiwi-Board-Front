import BaseModel from '../BaseModel';

class BoardModel extends BaseModel {

    constructor() {
        super();
        this._view = {
            useYn: String,
            createdAt: String,
            updatedAt: String,
            boardNo: Number,
            title: String,
            content: String,
            memberResponse: Object,
        };
    }

    /**
     * @override
     */
    setView(data = {}) {
        const {
            useYn,
            createdAt,
            updatedAt,
            boardNo,
            title,
            content,
            memberResponse
        } = data;
        this._view.useYn = useYn;
        this._view.createdAt = createdAt;
        this._view.updatedAt = updatedAt;
        this._view.boardNo = boardNo || 0;
        this._view.title = title;
        this._view.content = content || '';
        this._view.memberResponse = memberResponse || {};
        return this;
    }
}


export default BoardModel;
