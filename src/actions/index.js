export const USER_SELECTED = 'USER_SELECTED'

export function selectUser(user){
    console.log('select', user)
    return {
        type: USER_SELECTED,
        payload: user
    }
}