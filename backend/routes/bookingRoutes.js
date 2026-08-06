// const express = require('express');
// const db = require('../db');
// const router = express.Router();



// // View all bookings
// router.get('/bookings', (req, res) => {
//     const sql = `
//      SELECT b.booking_id, b.barcode_number, b.serving_time, b.booking_status, b.booking_date, 
//        s.student_name, s.student_register_number 
// FROM booking b
// LEFT JOIN student s ON b.student_id = s.student_id
// ORDER BY b.booking_date DESC
//         `;
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Failed to fetch bookings', details: err.message });
//         }
//         res.json(results);
//     });
// });

// // View a single booking by ID
// router.get('/bookings/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = `
//         SELECT b.booking_id, b.barcode_number, b.serving_time, b.booking_status, b.booking_date, 
//                s.student_name, s.student_register_number 
//         FROM booking b
//         LEFT JOIN student s ON b.student_id = s.student_id
//         WHERE b.booking_id = ?
//     `;
//     db.query(sql, [id], (err, results) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Failed to fetch booking', details: err.message });
//         }
//         if (results.length === 0) {
//             return res.status(404).json({ error: 'Booking not found' });
//         }
//         res.json(results[0]);
//     });
// });

// // Change booking status
// router.put('/bookings/:id/status', (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;

//     // Validate input
//     if (!status || !['Pending', 'Completed', 'Cancelled'].includes(status)) {
//         return res.status(400).json({ error: 'Invalid status. Allowed values: Pending, Completed, Cancelled' });
//     }

//     const sql = 'UPDATE booking SET booking_status = ? WHERE booking_id = ?';
//     db.query(sql, [status, id], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Failed to update booking status', details: err.message });
//         }
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Booking not found' });
//         }
//         res.json({ message: 'Booking status updated successfully', bookingId: id, status });
//     });
// });

// module.exports = router;
const express = require('express');
const db = require('../db');
const router = express.Router();

// View all bookings
// router.get('/bookings', (req, res) => {
//     const sql = `
//       SELECT 
//     b.booking_id, 
//     b.barcode_number, 
//     b.serving_time, 
//     b.booking_status, 
//     b.booking_date, 
//     s.student_name, 
//     s.student_register_number
// FROM booking b
// LEFT JOIN login_master l ON b.student_id = l.login_id
// LEFT JOIN student s ON l.user_name = student_register_number
// ORDER BY b.booking_date DESC
//     `;
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: 'Failed to fetch bookings', details: err.message });
//         }
//         res.json(results);
//     });
// });

router.get('/bookings', (req, res) => {
  const bookingSql = `
    SELECT 
      b.booking_id,
      b.barcode_number,
      b.serving_time,
      b.booking_status,
      b.booking_date,
      s.student_name,
      s.student_register_number
    FROM booking b
    LEFT JOIN login_master l ON b.student_id = l.login_id
    LEFT JOIN student s ON l.user_name = s.student_register_number
    ORDER BY b.booking_date DESC
  `;

  db.query(bookingSql, (err, bookings) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (bookings.length === 0) {
      return res.json([]);
    }

    const bookingIds = bookings.map(b => b.booking_id);

    const itemsSql = `
      SELECT 
        booking_id,
        item_name,
        price AS item_price,
        quantity
      FROM booking_items
      WHERE booking_id IN (?)
    `;

    db.query(itemsSql, [bookingIds], (err, items) => {
      if (err) {
        return res.status(500).json(err);
      }

      // Group items by booking_id
      const itemsByBooking = {};
      items.forEach(item => {
        if (!itemsByBooking[item.booking_id]) {
          itemsByBooking[item.booking_id] = [];
        }
        itemsByBooking[item.booking_id].push(item);
      });

      // Attach items to bookings
      const finalResult = bookings.map(b => ({
        ...b,
        items: itemsByBooking[b.booking_id] || []
      }));

      res.json(finalResult);
    });
  });
});

// View a single booking by ID
router.get('/bookings/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT 
            b.booking_id, 
            b.barcode_number, 
            b.serving_time, 
            b.booking_status, 
            b.booking_date, 
            s.student_name, 
            s.student_register_number 
        FROM booking b
        LEFT JOIN student s ON b.student_id = s.student_id
        WHERE b.booking_id = ?
    `;
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to fetch booking', details: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(results[0]);
    });
});

// Change booking status
router.put('/bookings/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // Validate input
    if (!status || !['Order placed', 'Completed', 'Cancelled'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status. Allowed values: Order placed, Completed, Cancelled' });
    }

    const sql = 'UPDATE booking SET booking_status = ? WHERE booking_id = ?';
    db.query(sql, [status, id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Failed to update booking status', details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json({ message: 'Booking status updated successfully', bookingId: id, status });
    });
});

router.post("/bookings", (req, res) => {
  const { student_id, serving_time, items } = req.body;
  // Generate 6-digit token number
  const barcode_number = Math.floor(100000 + Math.random() * 900000).toString();

  const bookingSql =
    "INSERT INTO booking (student_id, serving_time,barcode_number, booking_status, booking_date) VALUES (?, ?,?, 'Order placed', NOW())";

  db.query(bookingSql, [student_id, serving_time,barcode_number,"Order placed"], (err, bookingResult) => {
    if (err) {
      return res.status(500).json({ error: "Booking failed" });
    }

    const bookingId = bookingResult.insertId;

    const itemSql =
      "INSERT INTO booking_items (booking_id, item_id, item_name, price, quantity) VALUES ?";

    const itemValues = items.map(item => [
      bookingId,
      item.item_id,
      item.item_name,
      item.price,
      item.quantity
    ]);

    db.query(itemSql, [itemValues], (err) => {
      if (err) {
        return res.status(500).json({ error: "Booking items failed" });
      }

      res.json({ message: "Booking placed successfully", bookingId, tokenNumber:barcode_number });
    });
  });
});

module.exports = router;