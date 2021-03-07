import './StoryReel.css';
import React from 'react'
import Story from './Story';

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story className="storyReel_story" profileSrc="https://i2-prod.mirror.co.uk/incoming/article8886262.ece/ALTERNATES/s1200/Mark-Zuckerberg.jpg" title="Mark Zuckerberg" image="https://cdn.businessinsider.de/wp-content/uploads/2019/10/screen-shot-2019-10-17-at-11526-pm-1.jpg"/>
            <Story className="storyReel_story" profileSrc="https://th.bing.com/th/id/OIP.0GRte8306K5VMpNt10NxFgHaFg?pid=ImgDet&rs=1" title="Tim Cook" image="https://media.wired.com/photos/5cb4cbc09ef3721114271230/master/w_1600%2Cc_limit/Backchannel-TIM-COOK_excerpt.jpg"/>
            <Story className="storyReel_story" profileSrc="https://image.tmdb.org/t/p/original/i5a0XRXLfu0meGB3g5Sy4qP8pY.jpg" title="Elon Musk" image="https://th.bing.com/th/id/OIP.dg7zEjDW2o5COhr4aC6TnAHaLH?pid=ImgDet&rs=1"/>
            <Story className="storyReel_story" profileSrc="https://upload.wikimedia.org/wikipedia/commons/4/45/Jacinda_Ardern_26_October_2017.png" title="Jacinda Ardern" image="https://th.bing.com/th/id/OIP.P7jmcQjCe-c54A_1kPZRwwHaE8?pid=ImgDet&rs=1"/>
            <Story className="storyReel_story" profileSrc="https://th.bing.com/th/id/OIP.VkrZVzjxmYD0-t7LYLOogQHaHk?pid=ImgDet&rs=1" title="Chandler Bing" image="https://s3.scoopwhoop.com/anj/Chandler_Bing/921221156.jpg"/>
        </div>
    )
}
