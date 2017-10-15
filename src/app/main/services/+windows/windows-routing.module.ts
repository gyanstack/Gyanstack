import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesChildComponent } from '../service.child.component';
import { DetailsComponent } from '../services.child.detail.component';

const routes: Routes = [
    {
        path: 'how_to_open_command_prompt_in_windows_7_8_10/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to open Command prompt in windows7/8/10 ', 
            metaDescription:'There are two methods to open command prompt in windows 7...'
        }
    },
    {
        path: 'desktop_screen_rotate_solution/:articleId',
        component: DetailsComponent,
        data:{
            title:'Desktop screen rotate solution', 
            metaDescription:'What if your desktop/Laptop screen gets its orientation changed? You want to change it back to its original but do not know how to change. Here is the easy fix to this problem. If your screen gets rotate and you tried it to restore...'
        }
    },
    {
        path: 'windows_installation_using_bootable_USB_Drive/:articleId',
        component: DetailsComponent,
        data:{
            title:'Windows Installation Using Bootable USB Pen Drive', 
            metaDescription:'Windows (either XP, 7, 8 or 10) is traditionally installed via an installation CD or DVD, but this is not possible on newer computers/laptop, netbooks or other devices with no optical drive. Need not to worry as you can install Windows using any USB pen drive...'
        }
    },
    {
        path: 'All_About_Internet_Viruses_and_Anti_Viruses/:articleId',
        component: DetailsComponent,
        data:{
            title:'All About Internet Viruses and AntiViruses...', 
            metaDescription:'The first question that comes into our mind when we think to purchase Antivirus software is ”what are the threats for which I need to buy an Anti-Virus Software”. In today’s scenario there are so many threats for computer/PC/Tablet/Mobile Phone.'
        }
    },
    {
        path: 'How_to_format_a_Pen_Drive_or_Memory_Card_in_Easy_Steps/:articleId',
        component: DetailsComponent,
        data:{
            title:'How to format a Pen Drive or Memory Card in Easy Steps.', 
            metaDescription:'NO need to describe what is pen drive or storage stick as it has become an very important part of our life, to carry data from one place to other but in this transferring steps sometimes pen drive get infected by virus or if we want to delete the unused data in one go. The solution is “format the pen drive”.'
        }
    },
    {
        path: 'Remove_shortcut_virus_from_Pen_Drive_or_Data_Card_Memory_card/:articleId',
        component: DetailsComponent,
        data:{
            title:'Remove shortcut virus from Pen Drive or Data Card/Memory card.', 
            metaDescription:'On a very good day when you open your computer and connect your Pen-drive having very important data, you see that a Shortcut is created in your Pen-drive and when you click, it doesn’t responds anything. By looking this it seems that all your data vanished and pen drive attacked by some kind of virus.'
        }
    },
    {
        path: '',
        component: ServicesChildComponent
    },
    { 
        path: '**', 
        component: DetailsComponent 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class WindowsRoutingModule { }