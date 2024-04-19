import express from 'express';
import { urlModel } from '../model/shortUrl';

export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        console.log("The fullUrl is " + req.body.fullUrl);
        const { fullUrl } = req.body;
        const urlFound = await urlModel.find({ fullUrl });
        if (urlFound.length > 0) {
            res.status(409); //409 is conflict i.e already exist in database
            res.send(urlFound);
        } else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).send(shortUrl); //record is created
        }
    } catch (error) {
        res.status(500).send({ "message": "something went wrong!" }) //500 is server error
    }
};

export const getAllUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrls = await urlModel.find();
        if (shortUrls.length < 0) {
            res.status(404).send({ message: "Short urls not found!" });
        } else {
            res.status(200).send(shortUrls);
        }
    } catch (error) {
        res.status(500).send({ "message": "something went wrong!" }) //500 is server error
    }
};

export const getUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        if (!shortUrl) {
            res.status(404).send({ message: "Full Url Not Found!" });
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }
    } catch (error) {
        res.status(500).send({ "message": "something went wrong!" }) //500 is server error
    }
}

export const deleteUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id });
        if (shortUrl) {
            res.status(200).send({ message: "Requested URL Successfully Deleted!" });
        }
    } catch (error) {
        res.status(500).send({ "message": "something went wrong!" }) //500 is server error
    }
}