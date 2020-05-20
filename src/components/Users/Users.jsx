import React from "react";
import style from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/empty_logo.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(rensponse => {
            this.props.setUsers(rensponse.data.items);
            this.props.setUsersTotalCount(rensponse.data.totalCount);
        });
    }
    //старый тестовый массив пользователей
        // props.setUsers(
        //     [{
        //         id: 1,
        //         photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1570751/pub_5d19ee6e8706ab00adcd8102_5d19f32457394600adca835f/scale_1200',
        //         following: true,
        //         name: 'Garrus',
        //         status: 'calibrations',
        //         location: {city: 'city', country: 'Phaleven'}
        //     },
        //         {
        //             id: 2,
        //             photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1570751/pub_5d19ee6e8706ab00adcd8102_5d19f32457394600adca835f/scale_1200',
        //             following: false,
        //             name: 'Liara',
        //             status: 'shadow broker',
        //             location: {city: 'city', country: 'Illium'}
        //         },
        //         {
        //             id: 3,
        //             photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1570751/pub_5d19ee6e8706ab00adcd8102_5d19f32457394600adca835f/scale_1200',
        //             following: true,
        //             name: 'Shepard',
        //             status: 'spectre',
        //             location: {city: 'city', country: 'Earth'}
        //         },
        //     ]
        // );

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(rensponse => {
            this.props.setUsers(rensponse.data.items);

        });
    };
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize); //кол-во страниц польз-лей
        let pages = [];
        for(let i=1;i<=pagesCount;++i){
            pages.push(i);
        }

        return(
            <div>
                <div className={style.pageNumber}>
                    {pages.map(p =>{
                        return <span className={this.props.currentPage === p && style.currentPage}
                                     onClick={() => this.onPageChanged(p)}>{p}</span>})}
                </div>
                {this.props.users.map(u =>
                    <div key={u.id} className={style.users}>
                        <div className={style.userLogo}>
                            <img className={style.userImg} src={u.photos.small !==null ? u.photos.small : userPhoto} alt=""/>
                            {u.following
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                        </div>
                        <div className={style.userDesc}>
                            <div>
                                <div className={style.name}>{u.name}</div>
                                <div className={style.status}>{u.status}</div>
                            </div>
                            <div className={style.location}>
                                <div className={style.city}>{'u.location.city'}</div>
                                <div className={style.country}>{'u.location.country'}</div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Users