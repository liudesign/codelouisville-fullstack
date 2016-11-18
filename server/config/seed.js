/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Comment from '../api/comment/comment.model';
import User from '../api/user/user.model';

Comment.find({}).remove()
    .then(() => {
        Comment.create({
           content: 'As an avid Horse Racing fan and handicapper myself, I always cringe when I hear other handicappers offer a runner while using the term "At A Price."  I feel that is a term handicappers should eliminate from their vocabulary. If you like the horse, you like the horse.  We all know by playing vertical tickets any day, you will need to spread.  However, if a horse happens to be a price, never tell your audience you like the horse because of the price..',
           author: 'Kenneth Moultry'
       }, {
           content: 'Spread with the narrative that any of your horses on your ticket is capable of winning at even chances.  If I handicap a runner as the best horse, he will be bet regardless of odds.',
           author: 'Andrew Smolder'
       }, {
           content: 'If I want to make more money, I then increase the bet on my horse making it the odds I desire.  I never dismiss a horse because of odds once I honestly handicap the race, however I do adjust my betting amount accordingly on that same horse depending on the odds.  Example - there are those who may like "Beholder" in the Distaff, but will only bet her at a certain price and not as the favorite.',
           author: 'Albert Handy'
       }, {
           content: 'Is it because some handicappers think it is sexy to play a 6-1 shot they never really liked, opposed to a horse they predicted would win, but will not bet the horse because it is a favorite?﻿',
           author: 'Betsy Long'
       }, {
           content: 'If you think Beholder will win, why would you change your  handicapping prowess just to get a horse at 5 or 6-1?  You did not like the other horse in the beginning on paper, so why would you allow odds (something the horse knows nothing about) to change your prediction of the outcome?',
           author: 'Rand Furst'
       }, {
           name: 'I amm taking Bondi Beach in the Melbourne',
           author: 'Richard Jones'
       });
    });

User.find({}).remove()
    .then(() => {
        User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@example.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@example.com',
            password: 'admin'
        })
    .then(() => {
        console.log('finished populating users');
    });
});
