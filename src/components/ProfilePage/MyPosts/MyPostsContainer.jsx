import MyPosts from "./MyPosts";
import {useSelector} from "react-redux";


const MyPostsContainer = () => {

    const profilePage = useSelector(state => state.profilePage)

    return (
        <>
            <MyPosts
                {...profilePage}
            />
        </>
    )

}

export default MyPostsContainer;