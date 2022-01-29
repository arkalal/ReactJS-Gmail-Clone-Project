import React from 'react';
import EmailListSettings from '../Email body/EmailListSettings';
import './MailOpen.css'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Avatar, IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MailOpen = () => {

    return <div className='emailDetail'>
        <EmailListSettings arrow></EmailListSettings>

        <div className="emailDetail-Message">
            <div className="emailDetail-header">
                <div className="emailDetail-headerLeft">
                    <h4>This is subject</h4>

                    <IconButton>
                        <LabelImportantIcon></LabelImportantIcon>
                    </IconButton>
                </div>

                <div className="emailDetail-headerRight">
                    <IconButton>
                        <PrintIcon></PrintIcon>
                    </IconButton>

                    <IconButton>
                        <LaunchIcon></LaunchIcon>
                    </IconButton>
                </div>
            </div>

            <div className="emailDetails-MiddleHeader">
                <div className="emailDetails-MiddleHeaderLeft">
                    <IconButton>
                        <Avatar></Avatar>
                    </IconButton>

                    <h4>Arkalal</h4>
                    <p>arkalal.chakravarty@gmail.com</p>
                </div>

                <div className="emailDetails-MiddleHeaderRight">
                    <p>Mon, 12 Jul 2021 14:23:14 GMT</p>

                    <IconButton>
                        <StarIcon></StarIcon>
                    </IconButton>

                    <IconButton>
                        <ReplyIcon></ReplyIcon>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>

            <div className="emailDetails-Body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum adipisci velit fuga quam. Quae unde consequatur non magnam ducimus vitae error modi facere, commodi expedita? Repudiandae ipsa voluptate sequi, veritatis inventore accusamus rerum. Laudantium cumque ullam consequatur, dicta voluptas facere nemo iusto rem odit cupiditate blanditiis id magni adipisci, nesciunt laborum debitis aliquam labore commodi perspiciatis aliquid? Autem, impedit fugit quis sint sit modi delectus corrupti? Modi, neque deleniti natus deserunt nam facere! Asperiores quisquam qui recusandae temporibus ullam facere?</p>
            </div>
        </div>
    </div>;
};

export default MailOpen;
