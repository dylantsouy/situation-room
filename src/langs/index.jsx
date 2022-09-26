import React from 'react';
import { us } from './us/us';
import { tw } from './tw/tw';

export const dictionaryList = { us, tw };

export const languageOptions = {
    us: <span className='langOption'>EN</span>,
    tw: <span className='langOption'>繁中</span>,
};
