

const isAdmin = (req, res, next) => {
    if (!req.user || req.user.isAdmin === false) {
      return res.status(403).json({
        success: false,
        message: "Access denied: Admins only",
      });
    }
    next();
  };
  
  export default isAdmin;
  
  