import React from 'react';
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div>
            <Pagination currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        totalItemsCount={totalUserCount}
                        pageSize={pageSize}/>
            <div>

                {users.map(user => <User user={user}
                                         key={user.id}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}/>)}
            </div>
        </div>
    );
};
export default Users;