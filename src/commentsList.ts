import avatar from './images/bozai.png';

export type CommentModule = {
    rpid: number;
    // user info
    user: {
        uid: string,
        avatar: string,
        uname: string,
    },
    // comment content
    content: string,
    // created datetime
    ctime: string,
    like: number,
};

export const currentUser = {
    // userid
    uid: '30009257',
    // profile
    avatar,
    // username
    uname: 'John',
};

// Comment List data
export const initialUsersList: CommentModule[] = [
    {
        // comment id
        rpid: 3,
        // user info
        user: {
            uid: '13258165',
            avatar: '',
            uname: 'Jay Zhou',
        },
        // comment content
        content: 'Nice, well done',
        // created datetime
        ctime: '10-18 08:15',
        like: 100,
    },
    {
        rpid: 2,
        user: {
            uid: '36080105',
            avatar: '',
            uname: 'Song Xu',
        },
        content: 'I search for you thousands of times, from dawn till dusk.',
        ctime: '11-13 11:29',
        like: 88,
    },
    {
        rpid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: 'John',
        },
        content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
        ctime: '10-19 09:00',
        like: 66,
    },
];