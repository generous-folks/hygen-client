// const Booking = require("../models/files");
const { getTreeView } = require('../../../scripts/getTree');
const { getFile } = require('../../../scripts/getFile');
const { gitClone } = require('../../../scripts/clone');

class FileController {
  static async getFiles(req, res) {
    const project = req.params.project;
    if (!project) {
      res.status(500).send();
    }

    await getTreeView(project, res);
  }

  static async getFile(req, res) {
    const path = req.body.path;
    if (!path) {
      res.status(500).send();
    }

    await getFile(path, res);
  }

  static async cloneRepository(req, res) {
    const repositoryUrl = req.body.url;
    if (!repositoryUrl) {
      res.status(500).send();
    }

    await gitClone(repositoryUrl, res);
  }

  // static getBookings(req, res) {
  //   Booking.find()
  //     .sort("date")
  //     .exec((err, bookings) => {
  //       if (err) {
  //         res.status(500).send(err);
  //       }
  //       res.json({ bookings });
  //     });
  // }
  // static getBooking(req, res) {
  //   Booking.findOne({ cuid: req.params.cuid }).exec((err, booking) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     }
  //     res.json({ booking });
  //   });
  // }

  // static addBooking(req, res) {
  //   if (
  //     !req.body.booking.firstname ||
  //     !req.body.booking.lastname ||
  //     !req.body.booking.tel ||
  //     !req.body.booking.email ||
  //     !req.body.booking.time ||
  //     !req.body.booking.date ||
  //     !req.body.booking.service ||
  //     !req.body.booking.persons
  //   ) {
  //     res.status(403).end();
  //   }
  //   const newBooking = new Booking(req.body.booking);
  //   newBooking.cuid = cuid();
  //   newBooking.save((err, saved) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     }
  //     res.json({ booking: saved });
  //   });
  // }

  // static deleteBooking(req, res) {
  //   Booking.findOne({ cuid: req.params.cuid }).exec((err, booking) => {
  //       if (err) {
  //         res.status(500).send(err);
  //       }
  //       booking.remove(() => {
  //         res.status(200).end();
  //       });
  //   });
  // }
}
module.exports = FileController;
