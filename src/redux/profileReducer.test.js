import React from "react";
import profileReducer, {addPost, deletePost} from "./profileReducer";


let state = {
    posts: [
        {id: 1, message: "Seydoux", likes: 7},
        {id: 2, message: "Reedus", likes: 4},
        {id: 3, message: "Mikkelson", likes: 6},
    ],
    profile: null,
    status: ""
};

test('correct message of posts', () => {
    //test data
    let action = addPost("Fragile");

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts[3].message).toBe("Fragile");
});

test('correct length', () => {
    //test data
    let action = addPost("Fragile");
    //action
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

test('posts length should be correct after deleting', ()=>{
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);

});