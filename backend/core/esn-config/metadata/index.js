'use strict';

const RESTRICTED = {
  rights: {} // empty rights for restricting any access via configuration API
};

module.exports = {
  rights: {
    padmin: 'rw',
    admin: 'rw'
  },
  configurations: {
    businessHours: require('./businessHours'),
    datetime: require('./datetime'),
    homePage: require('./homepage'),
    autoconf: require('./autoconf'),
    language: require('./language'),
    ldap: require('./ldap'),
    mail: require('./mail'),
    davserver: require('./davserver'),
    oauth: require('./oauth'),
    jwt: require('./jwt'),
    web: require('./web'),
    webserver: require('./webserver'),
    login: require('./login'),
    features: require('./features'),
    modules: require('./modules'),
    membersCanBeSearched: require('./membersCanBeSearched'),
    maxSizeUpload: require('./maxSizeUpload'),
    user: RESTRICTED,
    amqp: RESTRICTED,
    redis: RESTRICTED,
    session: RESTRICTED,
    constants: RESTRICTED,
    platformadmin: RESTRICTED
  }
};
