import { course_images } from "./images";

const courses = [
  // Personal Finance Management
    {
        id: "PFM1",
        category: "personal finance management",
        image: course_images.per_1,
        course_name: "Budgeting for Beginners",
        description: "Learn how to create and manage a budget to take control of your personal finances.",
        rating_count: 1500,
        rating_star: 4.5,
        students: 12000,
        creator: "John Doe",
        updated_date: "1/2021",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Create and maintain a personal budget",
            "Understand and manage expenses",
            "Achieve financial goals through budgeting"
        ],
        content: [
            "Introduction to Budgeting",
            "Setting Financial Goals",
            "Tracking Income and Expenses",
            "Adjusting Your Budget",
            "Budgeting Tools and Apps"
        ]
    },
    {
        id: "PFM2",
        category: "personal finance management",
        image: course_images.per_2,
        course_name: "Understanding Credit Scores",
        description: "Learn how credit scores work and how to improve yours.",
        rating_count: 1300,
        rating_star: 4.3,
        students: 11000,
        creator: "Jane Smith",
        updated_date: "3/2021",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand the components of credit scores",
            "Learn strategies to improve your credit score",
            "Navigate credit reports effectively"
        ],
        content: [
            "Credit Score Basics",
            "Factors Affecting Credit Scores",
            "Improving Your Credit Score",
            "Credit Reports Explained",
            "Dealing with Credit Bureaus"
        ]
    },
    {
        id: "PFM3",
        category: "personal finance management",
        image: course_images.per_3,
        course_name: "Managing Debt Effectively",
        description: "Learn strategies to manage and reduce your debt effectively.",
        rating_count: 1450,
        rating_star: 4.6,
        students: 9500,
        creator: "Michael Johnson",
        updated_date: "5/2021",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand different types of debt",
            "Develop a debt repayment plan",
            "Utilize debt management tools"
        ],
        content: [
            "Types of Debt",
            "Debt Repayment Strategies",
            "Debt Consolidation",
            "Negotiating with Creditors",
            "Avoiding Future Debt"
        ]
    },
    {
        id: "PFM4",
        category: "personal finance management",
        image: course_images.per_4,
        course_name: "Creating a Personal Financial Plan",
        description: "Learn how to create a comprehensive financial plan for your future.",
        rating_count: 1600,
        rating_star: 4.7,
        students: 14000,
        creator: "Emily Davis",
        updated_date: "7/2021",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Set financial goals",
            "Create a financial plan",
            "Monitor and adjust your plan as needed"
        ],
        content: [
            "Introduction to Financial Planning",
            "Setting Financial Goals",
            "Creating a Financial Plan",
            "Implementing Your Plan",
            "Reviewing and Adjusting Your Plan"
        ]
    },
    {
        id: "PFM5",
        category: "personal finance management",
        image: course_images.per_5,
        course_name: "Strategies for Saving and Investing",
        description: "Learn effective strategies for saving money and investing for the future.",
        rating_count: 1700,
        rating_star: 4.8,
        students: 13000,
        creator: "David Wilson",
        updated_date: "9/2021",
        lang: "english",
        actual_price: 999,
        discounted_price: 499,
        what_you_will_learn: [
            "Develop saving strategies",
            "Understand investment options",
            "Build an investment portfolio"
        ],
        content: [
            "Saving Strategies",
            "Investment Basics",
            "Types of Investments",
            "Building an Investment Portfolio",
            "Monitoring Investments"
        ]
    },

  // Financial Risk Management
    {
        id: "FRM1",
        category: "financial risk management",
        image: course_images.risk_1,
        course_name: "Introduction to Risk Management",
        description: "Learn the fundamentals of financial risk management.",
        rating_count: 1800,
        rating_star: 4.6,
        students: 12500,
        creator: "Sarah Lee",
        updated_date: "11/2021",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand risk management concepts",
            "Identify financial risks",
            "Develop risk management strategies"
        ],
        content: [
            "Risk Management Basics",
            "Types of Financial Risks",
            "Risk Identification",
            "Risk Assessment",
            "Risk Mitigation Strategies"
        ]
    },
    {
        id: "FRM2",
        category: "financial risk management",
        image: course_images.risk_2,
        course_name: "Understanding Market Volatility",
        description: "Learn about market volatility and how to manage its impact.",
        rating_count: 1700,
        rating_star: 4.5,
        students: 11500,
        creator: "Chris Martin",
        updated_date: "1/2022",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand market volatility",
            "Analyze market trends",
            "Implement volatility management strategies"
        ],
        content: [
            "Introduction to Market Volatility",
            "Causes of Market Volatility",
            "Market Trend Analysis",
            "Managing Volatility",
            "Case Studies"
        ]
    },
    {
        id: "FRM3",
        category: "financial risk management",
        image: course_images.risk_3,
        course_name: "Hedging Strategies for Investors",
        description: "Learn effective hedging strategies to protect your investments.",
        rating_count: 1650,
        rating_star: 4.7,
        students: 10500,
        creator: "Anna Brown",
        updated_date: "3/2022",
        lang: "english",
        actual_price: 999,
        discounted_price: 499,
        what_you_will_learn: [
            "Understand hedging concepts",
            "Develop hedging strategies",
            "Implement hedging techniques"
        ],
        content: [
            "Hedging Basics",
            "Types of Hedging Instruments",
            "Developing a Hedging Strategy",
            "Implementing Hedging Techniques",
            "Monitoring and Adjusting Hedges"
        ]
    },
    {
        id: "FRM4",
        category: "financial risk management",
        image: course_images.risk_4,
        course_name: "Insurance and Risk Mitigation",
        description: "Learn how insurance can be used as a tool for risk mitigation.",
        rating_count: 1550,
        rating_star: 4.4,
        students: 9500,
        creator: "James White",
        updated_date: "5/2022",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand different types of insurance",
            "Evaluate insurance needs",
            "Implement insurance as a risk mitigation tool"
        ],
        content: [
            "Introduction to Insurance",
            "Types of Insurance",
            "Evaluating Insurance Needs",
            "Insurance as Risk Mitigation",
            "Case Studies"
        ]
    },
    {
        id: "FRM5",
        category: "financial risk management",
        image: course_images.risk_5,
        course_name: "Portfolio Diversification Techniques",
        description: "Learn how to diversify your investment portfolio to manage risk.",
        rating_count: 1600,
        rating_star: 4.6,
        students: 10000,
        creator: "Olivia Green",
        updated_date: "7/2022",
        lang: "english",
        actual_price: 999,
        discounted_price: 499,
        what_you_will_learn: [
            "Understand portfolio diversification",
            "Develop diversification strategies",
            "Implement diversified investment portfolios"
        ],
        content: [
            "Basics of Portfolio Diversification",
            "Diversification Strategies",
            "Asset Allocation",
            "Building a Diversified Portfolio",
            "Monitoring and Rebalancing"
            ]
    },

  // Estate Planning
    {
        id: "EP1",
        category: "estate planning",
        image: course_images.est_1,
        course_name: "Foundations of Estate Planning",
        description: "Learn the basics of estate planning to secure your financial future.",
        rating_count: 1400,
        rating_star: 4.7,
        students: 12000,
        creator: "Emma Brown",
        updated_date: "9/2022",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand estate planning concepts",
            "Create a basic estate plan",
            "Implement estate planning strategies"
        ],
        content: [
            "Introduction to Estate Planning",
            "Understanding Wills and Trusts",
            "Estate Planning Tools",
            "Implementing an Estate Plan",
            "Case Studies"
        ]
    },
    {
        id: "EP2",
        category: "estate planning",
        image: course_images.est_2,
        course_name: "Estate Taxes and Strategies",
        description: "Learn about estate taxes and strategies to minimize them.",
        rating_count: 1500,
        rating_star: 4.5,
        students: 11000,
        creator: "Lucas Miller",
        updated_date: "11/2022",
        lang: "english",
        actual_price: 999,
        discounted_price: 399,
        what_you_will_learn: [
            "Understand estate taxes",
            "Develop strategies to minimize estate taxes",
            "Implement tax-efficient estate planning"
        ],
        content: [
            "Estate Tax Basics",
            "Strategies to Minimize Estate Taxes",
            "Tax-Efficient Estate Planning",
            "Legal Considerations",
            "Case Studies"
        ]
    },
    {
        id: "EP3",
        category: "estate planning",
        image: course_images.est_3,
        course_name: "Wills and Trusts Essentials",
        description: "Learn the essentials of wills and trusts for effective estate planning.",
        rating_count: 1450,
        rating_star: 4.6,
        students: 10500,
        creator: "Sophia Anderson",
        updated_date: "1/2023",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand the role of wills and trusts",
            "Create and manage wills and trusts",
            "Implement wills and trusts in estate planning"
        ],
        content: [
            "Introduction to Wills and Trusts",
            "Types of Wills",
            "Types of Trusts",
            "Creating Wills and Trusts",
            "Managing Wills and Trusts"
        ]
    },
    {
        id: "EP4",
        category: "estate planning",
        image: course_images.est_4,
        course_name: "Planning for Charitable Giving",
        description: "Learn how to incorporate charitable giving into your estate plan.",
        rating_count: 1400,
        rating_star: 4.4,
        students: 10000,
        creator: "William Harris",
        updated_date: "3/2023",
        lang: "english",
        actual_price: 999,
        discounted_price: 499,
        what_you_will_learn: [
            "Understand the benefits of charitable giving",
            "Incorporate charitable giving into your estate plan",
            "Utilize charitable trusts and foundations"
        ],
        content: [
            "Introduction to Charitable Giving",
            "Benefits of Charitable Giving",
            "Charitable Trusts and Foundations",
            "Incorporating Charitable Giving into Estate Planning",
            "Case Studies"
        ]
    },
    {
        id: "EP5",
        category: "estate planning",
        image: course_images.est_5,
        course_name: "Estate Administration and Probate Process",
        description: "Learn about estate administration and the probate process.",
        rating_count: 1350,
        rating_star: 4.5,
        students: 9500,
        creator: "Benjamin Martinez",
        updated_date: "5/2023",
        lang: "english",
        actual_price: 999,
        discounted_price: 599,
        what_you_will_learn: [
            "Understand estate administration",
            "Navigate the probate process",
            "Implement estate administration strategies"
        ],
        content: [
            "Introduction to Estate Administration",
            "Probate Process Overview",
            "Role of Executors and Administrators",
            "Estate Administration Strategies",
            "Case Studies"
        ]
    },

  // Insurance Fundamentals
    {
        id: "IF1",
        category: "insurance fundamentals",
        image: course_images.ins_1,
        course_name: "Introduction to Insurance Products",
        description: "Learn about different insurance products and their benefits.",
        rating_count: 1250,
        rating_star: 4.4,
        students: 8000,
        creator: "Henry Robinson",
        updated_date: "7/2023",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand various insurance products",
            "Evaluate insurance needs",
            "Choose the right insurance products"
        ],
        content: [
            "Introduction to Insurance",
            "Types of Insurance Products",
            "Evaluating Insurance Needs",
            "Choosing Insurance Products",
            "Case Studies"
        ]
    },
    {
        id: "IF2",
        category: "insurance fundamentals",
        image: course_images.ins_2,
        course_name: "Life Insurance Essentials",
        description: "Learn the essentials of life insurance and how to choose the right policy.",
        rating_count: 1150,
        rating_star: 4.5,
        students: 7500,
        creator: "Jessica Thomas",
        updated_date: "9/2023",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand life insurance",
            "Evaluate life insurance needs",
            "Choose the right life insurance policy"
        ],
        content: [
            "Introduction to Life Insurance",
            "Types of Life Insurance",
            "Evaluating Life Insurance Needs",
            "Choosing a Life Insurance Policy",
            "Case Studies"
        ]
    },
    {
        id: "IF3",
        category: "insurance fundamentals",
        image: course_images.ins_3,
        course_name: "Health Insurance Basics",
        description: "Learn the basics of health insurance and how to choose the right plan.",
        rating_count: 1050,
        rating_star: 4.4,
        students: 7000,
        creator: "Daniel Lee",
        updated_date: "11/2023",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand health insurance",
            "Evaluate health insurance needs",
            "Choose the right health insurance plan"
        ],
        content: [
            "Introduction to Health Insurance",
            "Types of Health Insurance",
            "Evaluating Health Insurance Needs",
            "Choosing a Health Insurance Plan",
            "Case Studies"
        ]
    },

  // Investment Basics
    {
        id: "IB1",
        category: "investment basics",
        image: course_images.inv_1,
        course_name: "Introduction to Stocks and Bonds",
        description: "Learn the basics of investing in stocks and bonds.",
        rating_count: 1350,
        rating_star: 4.6,
        students: 10000,
        creator: "Karen Johnson",
        updated_date: "1/2024",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand stocks and bonds",
            "Evaluate investment opportunities",
            "Develop investment strategies"
        ],
        content: [
            "Introduction to Stocks",
            "Introduction to Bonds",
            "Evaluating Investment Opportunities",
            "Developing Investment Strategies",
            "Case Studies"
        ]
    },
    {
        id: "IB2",
        category: "investment basics",
        image: course_images.inv_2,
        course_name: "Fundamentals of Mutual Funds",
        description: "Learn the fundamentals of investing in mutual funds.",
        rating_count: 1250,
        rating_star: 4.5,
        students: 8500,
        creator: "Matthew Brown",
        updated_date: "3/2024",
        lang: "english",
        actual_price: 999,
        discounted_price: 0,
        what_you_will_learn: [
            "Understand mutual funds",
            "Evaluate mutual fund performance",
            "Develop mutual fund investment strategies"
        ],
        content: [
            "Introduction to Mutual Funds",
            "Types of Mutual Funds",
            "Evaluating Mutual Fund Performance",
            "Developing Mutual Fund Strategies",
            "Case Studies"
        ]
    },
    {
        id: "PL1",
        category: "play & learn",
        image: course_images.inv_1,
        course_name: "Introduction to Stocks and Bonds",
        description: "Learn the basics of investing in stocks and bonds.",
        rating_count: 1350,
        rating_star: 4.6,
        students: 10000,
        creator: "Karen Johnson",
        updated_date: "1/2024",
        lang: "english",
        actual_price: 99.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Understand stocks and bonds",
            "Evaluate investment opportunities",
            "Develop investment strategies"
        ],
        content: [
            "Introduction to Stocks",
            "Introduction to Bonds",
            "Evaluating Investment Opportunities",
            "Developing Investment Strategies",
            "Case Studies"
        ]
    },
    {
        id: "PL2",
        category: "play & learn",
        image: course_images.inv_2,
        course_name: "Fundamentals of Mutual Funds",
        description: "Learn the fundamentals of investing in mutual funds.",
        rating_count: 1250,
        rating_star: 4.5,
        students: 8500,
        creator: "Matthew Brown",
        updated_date: "3/2024",
        lang: "english",
        actual_price: 109.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Understand mutual funds",
            "Evaluate mutual fund performance",
            "Develop mutual fund investment strategies"
        ],
        content: [
            "Introduction to Mutual Funds",
            "Types of Mutual Funds",
            "Evaluating Mutual Fund Performance",
            "Developing Mutual Fund Strategies",
            "Case Studies"
        ]
    }
];

export default courses;