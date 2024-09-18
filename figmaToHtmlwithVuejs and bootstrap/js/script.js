new Vue({
    el:"#app",
    data: {
        'menus':[
            {
                'id': 0,
                'item': 'Blog'
            },
            {
                'id': 1,
                'item': 'Works'
            },
            {
                'id': 2,
                'item': 'Contact'
            }

        ],
        'card_title':'Work',
        'cards':[
            {
                "id":0,
                "img_link":"./images/Rectangle 30.png",
                "img_alt":"image0",
                "car_title":"Designing Dashboards",
                "button_text": "2020",
                "span_text": "Dashboard",
                "content": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
            {
                "id":1,
                "img_link":"./images/Rectangle 32.png",
                "img_alt":"image1",
                "car_title":"Vibrant Portraits of 2020",
                "button_text": "2018",
                "span_text": "Illustration",
                "content": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
            {
                "id":2,
                "img_link":"./images/Rectangle 30 (1).png",
                "img_alt":"image2",
                "car_title":"Designing Landing pages",
                "button_text": "2020",
                "span_text": "Website",
                "content": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
            {
                "id":3,
                "img_link":"./images/Rectangle 34.png",
                "img_alt":"image3",
                "car_title":"36 Days of Malayalam type",
                "button_text": "2020",
                "span_text": "Typography",
                "content": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
            {
                "id":4,
                "img_link":"./images/Rectangle 40.png",
                "img_alt":"image4",
                "car_title":"Components",
                "button_text": "2020",
                "span_text": "Components, Design",
                "content": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            },
        ],
        'socials':[
            {
                'img_link': './images/fb.svg'
            },
            {
                'img_link': './images/insta.svg'
            },
            {
                'img_link': './images/Vector.svg'
            },
            {
                'img_link': './images/Linkedin.svg'
            }

        ],
        'footer_text': "Copyright ©2020 All rights reserved"
    },
    methods: {
        changeWorkItemClass:function(card_id)
        {
            if(card_id == 2) {
                return "mobile-item work-item";
            } else {
                return "work-item d-flex";
            }
        },
        addActiveClass:function(menu_id)
        {
            if(menu_id == 1) {
                return "nav-link active";
            } else {
                return "nav-link";
            }
        }
    }
});
