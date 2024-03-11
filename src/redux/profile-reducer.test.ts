import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";



let state = {
    posts: [
        {likesCount: 0, id: 1, message: "One"},
        {likesCount: 0, id: 2, message: "Two"},
        {likesCount: 0, id: 3, message: "Three"}
    ],
    profile: null,
    status: ""
}


test('length posts should be incremented', () => {
    let action = addPostAC("df")


    let newState = profileReducer(state, action)
    console.log(newState)
    expect(newState.posts.length).toBe(4);
})


test('new message posts should be correct', () => {
    let action = addPostAC("df")


    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe("df")
})


test('length of messages should be decrement', () => {
    let action = deletePostAC(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})


test('length of messages shouldn t be decrement if id is incorrect', () => {
    let action = deletePostAC(1000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})