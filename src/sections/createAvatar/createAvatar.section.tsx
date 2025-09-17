import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { girlImg, men2Img } from 'assets';

type BuisnessTypes = {
  restaurant: boolean;
  museum: boolean;
  other: boolean;
};

type AvatarTypes = {
  Mark: boolean;
  Itamar: boolean;
};

export const CreateAvatarSection: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');
  const [buisnessType, setBuisnessType] = useState<string>('restaurant');
  const [options, setOptions] = useState<BuisnessTypes>({
    restaurant: true,
    museum: false,
    other: false,
  });
  const [description, setDescription] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [avatarType, setAvatarType] = useState<string>('Mark');
  const [optionsAvatar, setOptionsAvatar] = useState<AvatarTypes>({
    Mark: true,
    Itamar: false,
  });
  const [about, setAbout] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSave: string = `firstName: ${firstName}\n lastName: ${lastName}\nemail:
     ${email}\ncontact: ${contact}\nbusinessName: ${businessName}\nbuisnessType: ${buisnessType}\nselectedOption:
     ${selectedOption}\noptions: ${JSON.stringify(options)}\navatarType: ${avatarType}\nabout: ${about}`;

    const fileData = new Blob([dataToSave], { type: 'text/plain' });

    const url = URL.createObjectURL(fileData);

    const link = document.createElement('a');

    link.download = 'user-info.json';
    link.href = url;
    link.click();
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setBuisnessType('restaurant');
    setBusinessName('');
    setOptions({
      restaurant: false,
      museum: false,
      other: false,
    });
    setAvatarType('Mark');
    setOptionsAvatar({
      Mark: false,
      Itamar: false,
    });
    setUrl('');
    setSelectedOption('');
    setAbout('');
  };

  return (
    <Box py={2}>
      <div className="App">
        <Typography variant="h2" mb={5} fontWeight={700}>
          Create an avatar for your business
        </Typography>
        <h2>Business owner's details: </h2>
        <fieldset>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              Enter your first name:*
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                placeholder="enter your first name"
                required
              />
            </label>

            <label htmlFor="lastName">
              Enter your last name:*
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </label>

            <label htmlFor="email">
              Enter Email:*
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </label>

            <label htmlFor="tel">
              Mobile Number:*
              <input
                type="tel"
                name="contact"
                id="contact"
                value={contact}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                placeholder="Enter a mobile number"
                required
              />
            </label>

            <h2>Business' details: </h2>

            <label htmlFor="nameBusiness">
              Name of your business:*
              <input
                type="text"
                name="nameBusiness"
                id="nameBusiness"
                value={businessName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBusinessName(e.target.value)}
                placeholder="Enter your business name"
                required
              />
            </label>

            <label htmlFor="type">
              Business type:*
              <input
                type="radio"
                name="type"
                value="Restaurant"
                id="Restaurant"
                checked={buisnessType === 'Restaurant'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBuisnessType(e.target.value)}
              />
              Restaurant
              <input
                type="radio"
                name="type"
                value="Museum"
                id="Museum"
                checked={buisnessType === 'Museum'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBuisnessType(e.target.value)}
              />
              Museum
              <input
                type="radio"
                name="type"
                value="other"
                id="other"
                checked={buisnessType === 'other'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBuisnessType(e.target.value)}
              />
              Other
            </label>

            <label htmlFor="desBusiness">
              Enter a description for your business:*
              <input
                type="text"
                name="desBusiness"
                id="desBusiness"
                value={description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                placeholder="Enter a description for your business"
                required
              />
            </label>

            <label htmlFor="url">
              Enter url of your business:
              <input
                type="url"
                name="url"
                id="url"
                value={url}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                placeholder="Enter url"
              />
            </label>
            <h2>Create an Avatar: </h2>
            <label htmlFor="create">
              Select your choice:*
              <select
                name="select"
                id="select"
                value={selectedOption}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value)}
              >
                <option
                  value=""
                  disabled
                  selected={selectedOption === ''}
                >
                  Select your Avatar
                </option>
                <option value="1">Mark</option>
                <option value="2">Itamar</option>
              </select>
            </label>

            <label htmlFor="type">
              Avatar type:*
              <input
                type="radio"
                name="type"
                value="Mark"
                id="Mark"
                checked={avatarType === 'Mark'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAvatarType(e.target.value)}
              />
              <img width="200px" height="200px" src={girlImg} alt="girl" />
              <input
                type="radio"
                name="type"
                value="Itamar"
                id="Itamar"
                checked={avatarType === 'Itamar'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAvatarType(e.target.value)}
              />
              <img width="200px" height="200px" src={men2Img} alt="men" />
            </label>

            <label htmlFor="text">
              Avatar text:*
              <textarea
                name="text"
                id="text"
                cols={30}
                rows={10}
                value={about}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAbout(e.target.value)}
                placeholder="write your Avatar's text"
                required
              />
            </label>

            <button
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </Box>
  );
};
