import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import proudStories from './ProudStories.json';

export default function ProudStories() {
  return (
    <div className='flex md:flex-row flex-col overflow-auto md:space-x-12 gap-2 md:gap-10 md:justify-between p-4 max-w-fit md:max-w-min'>
      {proudStories.map((story, index) => (
      <Card key ={index} sx={{ minWidth: [100, 185, 350], maxHeight: {xs:250, sm:380, md:300}}}>
      <CardContent className='flex flex-col items-center'>
      <Avatar alt="Remy Sharp" src="/avatar.png"  sx ={{width: 56, height: 56 }}/>
        <Typography className="pt-4" variant="h5" component="div">
          {story.name}
        </Typography>
        <Typography sx={{ m: 1.5 }} color="text.secondary">
          {story.title}
        </Typography>
        <Typography variant="body2" sx={{textAlign:'center'}}>
        {story.comments}
        </Typography>
        <Typography variant="body2" sx={{textAlign:'end'}}>
        {story.quote}
        </Typography>
      </CardContent>
    </Card>
      ))} 
    </div>
  );
}
