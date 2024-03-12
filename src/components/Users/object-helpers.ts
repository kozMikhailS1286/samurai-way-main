import {UserStateType} from "../../redux/users-reducer";

export const updateObjectInArray = (items: UserStateType[], itemsId: number,
                                    objPropsName: "id", newObjProps: object) => {
    return items.map(u => {
        if (u[objPropsName] === itemsId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}