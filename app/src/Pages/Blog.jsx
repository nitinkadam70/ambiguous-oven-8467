import React from 'react'
import styles from "../Styles/Blog.module.css"
import { Box, IconButton, Input, Select, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
export const BlogPage = () => {
    return (
        <div>

            <div id={styles.firstBox}>
                <p>Blogs</p>
            </div>

            {/* <div id={styles.SecondBox}>
            <button id={styles.secondFlex}>
                <div>Search</div>
                <div>Icon</div>
            </button>
            <button></button>
        </div> */}
            <br />

            <Box display='flex' justifyContent='center' gap='25%' justifyItems='center'>
                <Box display='flex' justifyItems='center'>
                    <Input placeholder='search' />
                    <IconButton aria-label='Search database' icon={<SearchIcon />} />
                </Box>
                <Stack>
                    <Select placeholder='All Categories'>
                        <option value='option2'>Communications</option>
                        <option value='option3'>Task and Projects</option>
                        <option value='option3'>CRM</option>
                        <option value='option3'>Contact center </option>
                        <option value='option3'>website</option>

                    </Select>
                </Stack>
            </Box>


            {/* gridbox */}
            <div id={styles.firstGrid} >
                <div>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/731/7317ae0442c9288c0a1573b1875f66ea/015f1951d5498dc8a503321a2500dfb0.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>Important Pricing Updates after August 1, 2022</p>
                        <p>There are important updates coming to Bitrix24 cloud subscriptions on August 1, 2022 and introduction to a new lineup of the Bitrix24 Enterprise cloud plans.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href="">Bitrix24 tips and updates</a></div>
                    </div>

                </div>

                {/* 2ndgridBox */}
                <div id={styles.g2}>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/1e1/1e17d5501559437e26ca9816d0e66288/523cd25633fcc37b8184e1455982ddde.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>Bitrix24 SCRUM Guide</p>
                        <p>Scrum is one of the most widely used Agile-based frameworks and - wouldn’t you know it - we have it right here in Bitrix24!Enterprise cloud plans.Bitrix24 tips and updates.Scrum the best among bitrix24.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href="">Bitrix24 tips and updates</a></div>
                    </div>
                </div>


                {/* 3rdgridBox */}
                <div>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/a4b/a4b3bc928ec0b6a07e11eeeb7caa2cb8/827ac6fc816cc0ea085a833ba8efa986.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>Set Up An Efficient Inventory Management System</p>
                        <p>To be able to manage your inventory effectively you need to set up your inventory management system properly. Be sure that you always have the right products in the right quantity.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href="">Bitrix24 tips and updates</a></div>
                    </div>
                </div>


                {/* 4thgridBox */}
                <div id={styles.g4}>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/72e/72e3603147b8105dd32e5f7e90a169c7/e0c848de0c05449cf07fd72a49f93b15.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>New In Inventory Management</p>
                        <p>Meet new big update for Inventory Management. New settings page, enable Inventory Management option, print Inventory Management documents and more.The new big Bitrix24 from Inventory Management.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href="">Bitrix24 tips and updates</a></div>
                    </div>
                </div>
            </div>


            {/* Free. Unlimited. Online.Box */}
            <div id={styles.freeBox}>
                <p>Free. Unlimited. Online.</p>
                <p>Bitrix24 is a place where everyone can communicate, collaborate on tasks and <br />projects, manage clients and do much more. </p>
                <button>Register free</button>
            </div>

            {/* Free. Unlimited -below-GridBox */}

            <div id={styles.firstGrid} >
                <div>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/72e/72e3603147b8105dd32e5f7e90a169c7/e0c848de0c05449cf07fd72a49f93b15.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>CRM Today 6th Webinar: Introduction to CRM marketing</p>
                        <p>We are continuing our Webinar series CRM Today with Vlad and Kate! Our 6th episode is dedicated to CRM marketing.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href="" id={styles.webinar}>Webinars</a></div>
                    </div>

                </div>

                {/* 2ndgridBox */}
                <div id={styles.g2}>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/50f/50fab9a0cba7b9ce3e70a3603a4450f0/eb7e8f5049ee4f75a7bbdee3a99a9df5.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>Connect MS Outlook To Bitrix24 Calendar</p>
                        <p>Keep track of your events and meetings in Bitrix24 calendar. Synchronize Bitrix24 Calendar with MS Outlook.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href=""></a></div>
                    </div>
                </div>


                {/* 3rdgridBox */}
                <div>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/277/2774f076cce6c3bf07f8623fdbc81ee2/0e468ea7ba3adf76ee2ffaeb18b19a92.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>Set Up An Efficient Inventory Management System</p>
                        <p>Keep track of your events and meetings in Bitrix24 calendar. Synchronize Bitrix24 Calendar with MS Outlook</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href=""></a></div>
                    </div>
                </div>


                {/* 4thgridBox */}
                <div id={styles.g4}>
                    <div>
                        <img id={styles.img1} src="https://d57439wlqx3vo.cloudfront.net/iblock/0c3/0c3601d2098c48a41b2e3c895c59cac1/2ae32fb949b1b62c371cce11879b6384.jpg?1658307647004" alt="" />
                    </div>

                    <div id={styles.pTag}>
                        <p>New In Inventory Management</p>
                        <p>Meet new big update for Inventory Management. New settings page, enable Inventory Management option, print Inventory Management documents and more.</p>
                    </div>

                    <div id={styles.flex2}>
                        <div><button>read more</button></div>
                        <div><a href="">Bitrix24 tips and updates</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPage;