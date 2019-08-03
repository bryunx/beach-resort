import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info: "lorem ipsum"
            },
            {
                icon:<FaHiking/>,
                title:'endless hiking',
                info: "lorem ipsum"
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info: "lorem ipsum"
            },
            {
                icon:<FaBeer/>,
                title:'strongest beer',
                info: "lorem ipsum"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
