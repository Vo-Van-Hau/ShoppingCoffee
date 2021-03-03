
// Style App
import '../../style/admin/admin.css';

import NavigationMenu from './navigation_menu';
import ActionProcess from './action_process';

const MainAdmin = () => {

    const URL_id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]; // type of action;

    return (
        <div className="admin">
            <div className="wrap-action">
                <div className="action-menu">
                    <NavigationMenu />
                </div>
                <div className="action-process">
                    { URL_id === "admin" ? "" : <ActionProcess /> }
                </div>
            </div>
        </div>
    )
}

export default MainAdmin;