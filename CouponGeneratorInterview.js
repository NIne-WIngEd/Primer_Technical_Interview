#This_is_the_version_I_left_the_interview_with

class CouponGenerator{

  constructor(maxCouponsPerUser=5){

    this.userToCoupons = new Map();

    this.couponToUsers = new Map();

    this.MaxCouponsPerUser = maxCouponsPerUser;
    this.couponLength = 8;

    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  }

  _randomCoupon(){

    let result ='';

    for (let i=0;i<this.couponLength;i++){

      result +=this.alphabet[Math.floor(Math.random()*
this.alphabet.length)];

    }

    return result;

  }

  generate(user){

    const coupons = this.userToCoupons.get(user); 

    if (coupons.length>=this.MaxCouponsPerUser){

      throw new Error('Reached limit');

    }

    let coupon;

    do {

      coupon = this._randomCoupon();

    }while (this.couponToUsers.has(coupon));

    coupon.push(coupon);

    this.couponToUser.set(coupon, user);

    return coupon;

  }

  consume(coupon){

    if (!this.couponToUser.has(coupon)){

      return false;

    }

    const user = this.couponToUsers.get(coupon);

    this.couponToUsers.delete(coupon);

    const coupons = this.userToCoupons.get(user) || [];

    this.userToCoupons.set(

      user,

      coupons.filter(c=>c !==coupon)

    );

    return true;

  }  

}

const cg = new CouponGenerator();



const c1 = cg.generate('alice');

const c2 = cg.generate('alice');

console.log('Generated:',c1,c2);

console.log('Consume c1:',cg.consume(c1));

console.log('Consume c1 again:',cg.consume(c1));

for (let i=0;i<4;i++){

  console.log('More for alice:',cg.generate('alice'));

}

console.log('6th coupon:',cg.generate('alice'));
