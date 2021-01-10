import React from 'react';
import { useDispatch } from 'react-redux';
import {deletePost} from '../store/actions/postAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const PostDetail=({post})=> {
        const MySwal = withReactContent(Swal)
        const dispatch=useDispatch();
        const celeb=(e)=>{
            MySwal.fire({
                title: 'Desteğiniz için teşekkür ederim',
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })

        }
        return (
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p> 
                        { post.content.length>100 ? post.content.substr(1,100)+' ...': post.content}
                          
                         </p>
                    </div>
                    <div className="card-action">
                        <button onClick={() =>dispatch(deletePost(post.id))} 
                        className="btn red">Delete</button>  
                        <button 
                        onClick={celeb}
                        className="btn primary" style={{marginLeft:"5px"}}>
                        Tıkla
                        </button>
                        
                    </div>
                      

                </div>

            </div>
        )
    
}
