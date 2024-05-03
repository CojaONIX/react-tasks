
export const appVersion = 1.3;

export const defaultCategories = ['Frontend', 'Backend', 'Design'];
export const defaultTasks =
    [
        {
            id: 1714303546000,
            owner: 'App',
            category: 'Welcome',
            title: 'Task #1 - Welcome!',
            body: 'Dobrodosli u WebApp TaskManager v' + appVersion,
            finished: false,
            comments: [
                {
                    id: 1714303546000,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur dolores officiis architecto ipsam omnis voluptate ducimus atque cupiditate tenetur magnam ratione dolorum est temporibus? Incidunt esse asperiores magnam, optio assumenda quis natus vel molestiae eligendi praesentium enim. Dolore quam ab consequatur blanditiis, expedita vel.',
                    author: 'Test'
                },
                {
                    id: 1714303556000,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis, nostrum optio nemo facere nesciunt labore ut tempora repudiandae placeat, dolor perferendis dicta dolores? Eum aspernatur accusantium laboriosam eius perspiciatis nesciunt illum consequuntur!',
                    author: 'Marija'
                },
                {
                    id: 1714303566000,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolorem laudantium vitae quisquam natus quidem qui error ea nihil modi, eos in beatae ratione rem sapiente eius, laboriosam blanditiis hic laborum consequatur? Reprehenderit praesentium porro explicabo animi vitae veritatis nostrum? Quisquam reprehenderit, quia minus enim voluptatem saepe labore. Fugit a, recusandae debitis voluptas dolorem enim expedita quibusdam obcaecati id dolor voluptatum, quia labore, iure natus. Repellat vitae autem nisi soluta eveniet porro atque fugit quae sunt inventore, repellendus voluptate exercitationem dolore rem nemo quisquam nostrum cum assumenda doloribus quas voluptates omnis velit. Laboriosam ducimus accusamus omnis sed? Quam, porro.',
                    author: 'Aleksandar'
                }
            ]
        },
        {
            id: 1714303547000,
            owner: 'App',
            category: 'Welcome',
            title: 'Task #2 - Login',
            body: 'Ulogujte se sa jednim od default korisnika da bi imali dodatne funkcije!',
            finished: false,
            comments: []
        },
        {
            id: 1714303548000,
            owner: 'App',
            category: 'Welcome',
            title: 'Task #3 - Manage',
            body: 'Bravo! Sada mozete potpuno da kontrolisete taskove.',
            finished: false,
            comments: []
        }
    ];

export const defaultUsers =
    [
        {
            id: 1,
            email: 'admin@admin.com',
            password: 'password',
            name: 'Admin',
            role: 'admin',
            isLogged: false
        },
        {
            id: 2,
            email: 'test@test.com',
            password: 'password',
            name: 'Test',
            role: 'test',
            isLogged: false
        },
        {
            id: 3,
            email: 'user01@user.com',
            password: 'password',
            name: 'Aleksandar',
            role: 'user',
            isLogged: false
        },
        {
            id: 4,
            email: 'user02@user.com',
            password: 'password',
            name: 'Ivan',
            role: 'user',
            isLogged: false
        },
        {
            id: 5,
            email: 'user03@user.com',
            password: 'password',
            name: 'Branko',
            role: 'user',
            isLogged: false
        },
        {
            id: 6,
            email: 'user04@user.com',
            password: 'password',
            name: 'Marija',
            role: 'user',
            isLogged: false
        },
        {
            id: 7,
            email: 'user05@user.com',
            password: 'password',
            name: 'Goran',
            role: 'user',
            isLogged: false
        }
    ];

