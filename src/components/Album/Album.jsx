import React from "react";
import { useSelector } from "react-redux";
import { album } from "../../services/action/album.action";

function Album() {

    const { albums } = useSelector(state => state.albumReducer);

    return (
        <div>
            {
                albums.map((album) => {
                    return (
                        <>
                            <ul>
                                <li>
                                    <span>
                                        {
                                            album.id
                                        }
                                    </span>
                                    <span>
                                        {
                                            album.title
                                        }
                                    </span>
                                    <input type="checkbox" checked={album.userId == true} />
                                </li>
                            </ul>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Album;