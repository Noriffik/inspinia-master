(function(){
Template.__checkName("productsGrid");
Template["productsGrid"] = new Template("Template.productsGrid", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Products grid"),
      category: Spacebars.call("Ecommerce")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content animated fadeInRight">\n        <div class="row">\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box active">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <div class="ibox">\n                    <div class="ibox-content product-box">\n\n                        <div class="product-imitation">\n                            [ INFO ]\n                        </div>\n                        <div class="product-desc">\n                                <span class="product-price">\n                                    $10\n                                </span>\n                            <small class="text-muted">Category</small>\n                            <a href="#" class="product-name"> Product</a>\n\n\n\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n\n\n\n    </div>') ];
}));

}).call(this);