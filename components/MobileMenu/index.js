import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/HomePage2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/HomePage3'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/AboutPage',
    },

{
    id: 3,
        title: 'Causes',
        link: '/CasePage',
        submenu: [
            {
                id: 31,
                title: 'Causes',
                link: '/CasePage'
            },
            {
                id: 32,
                title: 'Causes Single',
                link: '/CaseSinglePage'
            }
        ]
    },
{
    id: 4,
        title: 'Event',
        link: '/EventPage',
        submenu: [
            {
                id: 41,
                title: 'Event',
                link: '/EventPage'
            },
            {
                id: 42,
                title: 'Event Single',
                link: '/EventPageSingle'
            }
        ]
    },
    {
        id: 7,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 71,
                title: 'About',
                link: '/AboutPage'
            },
            {
                id: 75,
                title: 'Donate',
                link: '/DonatePage'
            },
            {
                id: 76,
                title: 'Volunteer',
                link: '/volunteerPage'
            },
    
            {
                id: 79,
                title: 'Error 404',
                link: '/ErrorPage'
            },
            
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/BlogPage',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/BlogPage'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/BlogPageLeft'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/BlogPageFullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/BlogDetails'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/BlogDetailsLeftSiide'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/BlogDetailsFull'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/ContactPage',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
