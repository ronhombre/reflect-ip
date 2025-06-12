export default {
  async fetch(request) {
    let ip = "N/A";
    let ipHeader = "CF-Connecting-IP"
    if (request.headers.has(ipHeader)){
      ip=request.headers.get(ipHeader)
    };
    const data = {
      ip: ip,
      Colo: request.cf.colo,
      Country: request.cf.country,
      City: request.cf.city,
      Continent: request.cf.continent,
      Latitude: request.cf.latitude,
      Longitude: request.cf.longitude,
      PostalCode: request.cf.postalCode,
      MetroCode: request.cf.metroCode,
      Region: request.cf.region,
      RegionCode: request.cf.regionCode,
      Timezone: request.cf.timezone,
    };
    return Response.json(data);
  },
};
