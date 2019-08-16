import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info: "Free cocktails at the bar from 1pm-4pm"
            },
            {
                icon:<FaHiking/>,
                title:'endless hiking',
                info: "Numerous hiking trails with gorgeous views"
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info: "Free shuttle rides to town"
            },
            {
                icon:<FaBeer/>,
                title:'strongest beer',
                info: "World's strongest beer home brewed"
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
