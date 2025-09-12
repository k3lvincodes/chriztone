'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import ContactForm from './contact-form';

interface ContactDialogProps {
  trigger: React.ReactNode;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ trigger }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Fill out the form below and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <ContactForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
