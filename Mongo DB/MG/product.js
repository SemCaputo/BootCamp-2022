const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTED!!!")
    })
    .catch(err => {
        console.log("ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be Positive']
    },
    onsale: {
        type: Boolean,
        default: false
    },
    // categories: {
    //     type: [String],
    //     default: ['Cycling'],
    //     qty: {
    //         online: {
    //             type: Number,
    //             default: 0
    //         },
    //         inStore: {
    //             type: Number,
    //             default: 0
    //         }
    //     }
    // }
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// productSchema.methods.greet = function () {
//     console.log('Hello!!!')
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleonsale = function () {
    this.onsale = !this.onsale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onsale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    // foundProduct.greet();
    console.log(foundProduct)
    await foundProduct.toggleonsale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))

// findProduct();


// const bike = new product({ name: 'Cycling Jersey', price: 25.99, categories: ['cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log('IT WORKED')
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('ERROR')
//         console.log(err.errors);
//     })

// product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WORKED')
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('ERROR')
//         console.log(err.errors);
//     })