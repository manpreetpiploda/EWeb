import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })
            // console.log("inside mailsender " );

            let info = await transporter.sendMail({
                from: 'StudyNotion ',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })

            return info;
    }
    catch(error) {
        console.log(error.message);
    }
};

export {mailSender};
