/* =========================================================================
   Home-only behaviors
   - Search → listings query string
   - Featured payment estimate (rate slider)
   - Instant home-value demo
   - Listing alert signup demo
   ========================================================================= */
(function(){
  "use strict";

  /* Search form → listings.html?... */
  var form = document.getElementById("heroSearchForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var params = new URLSearchParams();
      var map = {hsType:"type", hsPrice:"price", hsAcreage:"acreage", hsTownship:"township"};
      Object.keys(map).forEach(function(id){
        var el = document.getElementById(id);
        if(!el) return;
        var v = el.value;
        if(v && v !== "all") params.set(map[id], v);
      });
      var qs = params.toString();
      window.location.href = "listings.html" + (qs ? "?" + qs : "");
    });
  }

  /* Monthly payment: M = P * r(1+r)^n / ((1+r)^n - 1) */
  function monthlyPayment(price, annualRate, downPct, years){
    var principal = price * (1 - downPct);
    var r = (annualRate / 100) / 12;
    var n = years * 12;
    if(r === 0) return principal / n;
    var factor = Math.pow(1 + r, n);
    return principal * (r * factor) / (factor - 1);
  }

  function formatMoney(n){
    return "$" + Math.round(n).toLocaleString("en-US");
  }

  var payOut = document.getElementById("payOut");
  var rateSlider = document.getElementById("rateSlider");
  var featured = document.getElementById("featuredPayment");
  var price = featured ? Number(featured.getAttribute("data-price")) || 649000 : 649000;

  function updatePayment(){
    if(!payOut || !rateSlider) return;
    var rate = parseFloat(rateSlider.value);
    rateSlider.setAttribute("aria-valuetext", rate + " percent");
    var mo = monthlyPayment(price, rate, 0.2, 30);
    payOut.innerHTML = formatMoney(mo) + "<span style=\"font-size:.7em\">/mo</span>";
  }
  if(rateSlider){
    rateSlider.addEventListener("input", updatePayment);
    updatePayment();
  }

  /* Illustrative home value — intentionally simple for concept demo */
  var valueForm = document.getElementById("valueForm");
  var valueResult = document.getElementById("valueResult");
  if(valueForm && valueResult){
    valueForm.addEventListener("submit", function(e){
      e.preventDefault();
      var beds = Number(document.getElementById("vBeds").value) || 3;
      var acres = Number(document.getElementById("vAcres").value) || 5;
      var mid = 180000 + beds * 42000 + acres * 8500;
      var low = Math.round(mid * 0.92 / 1000) * 1000;
      var high = Math.round(mid * 1.08 / 1000) * 1000;
      valueResult.className = "val-result show";
      valueResult.innerHTML =
        "<strong>" + formatMoney(low) + " – " + formatMoney(high) + "</strong>" +
        "<span style=\"color:var(--ink-soft);font-size:.9rem\">Illustrative range for " +
        (document.getElementById("vAddress").value || "your address") +
        ". <a href=\"guide.html#schedule\">Book a CMA call</a> for comps.</span>";
    });
  }

  /* Listing alert demo */
  var alertForm = document.getElementById("alertForm");
  var alertConfirm = document.getElementById("alertConfirm");
  if(alertForm && alertConfirm){
    alertForm.addEventListener("submit", function(e){
      e.preventDefault();
      alertConfirm.classList.add("show");
      alertForm.querySelector("button[type=submit]").disabled = true;
    });
  }
})();
